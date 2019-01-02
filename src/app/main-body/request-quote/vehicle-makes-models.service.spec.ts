import { TestBed } from '@angular/core/testing';

import { VehicleMakesModelsService } from './vehicle-makes-models.service';

describe('VehicleMakesModelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleMakesModelsService = TestBed.get(VehicleMakesModelsService);
    expect(service).toBeTruthy();
  });
});
