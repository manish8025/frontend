import { TestBed } from '@angular/core/testing';

import { SensorDataServiceService } from './sensor-data-service.service';

describe('SensorDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorDataServiceService = TestBed.get(SensorDataServiceService);
    expect(service).toBeTruthy();
  });
});
