import { TestBed } from '@angular/core/testing';

import { TgBackButtonService } from './tg-back-button.service';

describe('TgBackButtonService', () => {
  let service: TgBackButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgBackButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
