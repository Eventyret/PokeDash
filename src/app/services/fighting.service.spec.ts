import { TestBed, inject } from '@angular/core/testing';

import { FightingService } from './fighting.service';

describe('FightingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FightingService]
    });
  });

  it('should be created', inject([FightingService], (service: FightingService) => {
    expect(service).toBeTruthy();
  }));
});
