import { TestBed } from '@angular/core/testing';

import { ExemploLoggerService } from './exemplo-logger.service';

describe('ExemploLoggerService', () => {
  let service: ExemploLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
