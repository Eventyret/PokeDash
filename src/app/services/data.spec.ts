import { TestBed, inject } from '@angular/core/testing';

import { PokemonDataService } from './data.service';

describe('PokemonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonDataService]
    });
  });

  it('should be created', inject([PokemonDataService], (service: PokemonDataService) => {
    expect(service).toBeTruthy();
  }));
});
