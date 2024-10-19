import { TestBed } from '@angular/core/testing';

import { TgStorageService } from './tg-storage.service';

describe('TgStorageService', () => {
  let service: TgStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
