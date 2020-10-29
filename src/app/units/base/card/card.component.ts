import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../models/product/product';
import {DeliveryService} from '../../../providers/delivery/delivery.service';
import {SelectComponent} from '../ui-elements/select/select.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  @ViewChild('crustSelect', {static: true}) private crustSelect: SelectComponent;
  @ViewChild('diameterSelect', {static: true}) private diameterSelect: SelectComponent;
  crustOptions = ['Thin crust', 'Thick crust'];
  diameterOptions = ['20 cm', '30 cm', '40 cm'];
  selectedDiameter = '';
  selectedCrust = '';
  multipliers = {};

  constructor(private  orderItemsService: DeliveryService) {
  }

  ngOnInit() {
    this.product.params = ['Thin crust', '20cm'];
    this.selectedDiameter = this.diameterOptions[0];
    this.selectedCrust = this.crustOptions[0];
    this.setMultipliers();
  }

  setMultipliers() {
    this.multipliers[this.diameterOptions[0]] = 0;
    this.multipliers[this.diameterOptions[1]] = 0.1;
    this.multipliers[this.diameterOptions[2]] = 0.2;
    this.multipliers[this.crustOptions[0]] = 0;
    this.multipliers[this.crustOptions[1]] = 0.1;
  }

  addToOrderCart() {
    const productClone = new Product();
    productClone.fromJSON(this.product.toJSON());
    this.orderItemsService.addToOrder(productClone);
  }

  selectCrust() {
    this.selectedCrust = this.crustSelect.getSelectedOption();
    this.product.params[0] = this.selectedCrust;
    this.setProductPriceMultiplier();
  }

  selectDiameter() {
    this.selectedDiameter = this.diameterSelect.getSelectedOption();
    this.product.params[1] = this.selectedDiameter;
    this.setProductPriceMultiplier();
  }

  setProductPriceMultiplier() {
    const productPriceMultiplier = 1 + this.multipliers[this.selectedCrust] + this.multipliers[this.selectedDiameter];
    console.log(productPriceMultiplier)
    this.product.setPriceMultiplier(productPriceMultiplier);
  }
}
