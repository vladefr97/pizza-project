import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeliveryService} from '../../../../providers/delivery/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  deliveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: [, {
        validators: [Validators.required],
        updateOn: 'change',
      }],
      email: [, {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      }],
      phone: [, {
        validators: [Validators.required, Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/)],
        updateOn: 'change',
      }],
      address: [, {
        validators: [Validators.required],
        updateOn: 'change',
      }],
      apartment: [, {
        validators: [Validators.required],
        updateOn: 'change',
      }],
      floor: ''
    });
  }

  makeOrder() {
    if (this.deliveryForm.invalid) {
      return;
    } else {
      this.deliveryService.makeOrder(this.deliveryForm.value);
      this.onSubmit.emit('Submitted');
    }
  }
}
