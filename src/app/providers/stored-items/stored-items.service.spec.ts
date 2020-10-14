import { TestBed } from '@angular/core/testing';

import { StoredItemsService } from './stored-items.service';

describe('StoredItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoredItemsService = TestBed.get(StoredItemsService);
    expect(service).toBeTruthy();
  });
});
