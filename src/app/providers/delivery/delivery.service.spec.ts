import { TestBed } from '@angular/core/testing';

import { DeliveryService } from './delivery.service';

describe('OrderItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryService = TestBed.get(DeliveryService);
    expect(service).toBeTruthy();
  });
});
