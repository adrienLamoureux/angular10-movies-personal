import { TestBed } from '@angular/core/testing';

import { ThemoviedbApiService } from './themoviedb-api.service';

describe('ThemoviedbApiService', () => {
  let service: ThemoviedbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemoviedbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
