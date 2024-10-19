import { TestBed } from '@angular/core/testing';

import { TgThemingService } from './tg-theming.service';

describe('TgThemingService', () => {
  let service: TgThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgThemingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
