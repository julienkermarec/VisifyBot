import { TestBed } from '@angular/core/testing';

import { TgBiometryService } from './tg-biometry.service';

describe('TgBiometryService', () => {
  let service: TgBiometryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgBiometryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
