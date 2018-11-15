import { TestBed } from '@angular/core/testing';

import { InventoryserviceService } from './inventoryservice.service';

describe('InventoryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryserviceService = TestBed.get(InventoryserviceService);
    expect(service).toBeTruthy();
  });
});
