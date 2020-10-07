import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() diameter: number;
  @Input() price: number;
  private count = 1;


  constructor() {
  }

  ngOnInit() {
  }

  private increaseCount() {
    this.count++;
  }

  private decreaseCount() {
    this.count = this.count <= 1 ? 1 : --this.count;

  }

}
