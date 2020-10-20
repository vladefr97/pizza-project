import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../providers/products/products.service';
import {DisplayService} from '../../providers/display/display.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public productsService: ProductsService, public displayService: DisplayService) {
  }

  ngOnInit() {
  }
}
