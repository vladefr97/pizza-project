import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSpoilerComponent } from './order-spoiler.component';

describe('OrderSpoilerComponent', () => {
  let component: OrderSpoilerComponent;
  let fixture: ComponentFixture<OrderSpoilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSpoilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
