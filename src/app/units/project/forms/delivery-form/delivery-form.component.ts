import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeliveryService} from '../../../../providers/delivery/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {
  deliveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: '',
      email: '',
      telephone: '',
      address: '',
      apartment: '',
      floor: ''
    });
    this.deliveryForm.valueChanges.subscribe(console.log);
  }

  makeOrder() {
    this.deliveryService.makeOrder(this.deliveryForm.value);
  }
}
