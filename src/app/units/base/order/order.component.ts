import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private name: string;
  private type: string;
  private diameter: number;
  private price: number;
  private count: number;


  constructor() {
  }

  ngOnInit() {
  }

  private increaseCount() {
    this.count++;
  }
  private decreaseCount() {
    this.count--;
  }

}
