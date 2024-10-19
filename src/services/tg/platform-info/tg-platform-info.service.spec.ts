import { TestBed } from '@angular/core/testing';

import { TgPlatformInfoService } from './tg-platform-info.service';

describe('TgPlatformInfoService', () => {
  let service: TgPlatformInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgPlatformInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
