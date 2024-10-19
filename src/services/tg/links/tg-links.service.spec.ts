import { TestBed } from '@angular/core/testing';

import { TgLinksService } from './tg-links.service';

describe('TgLinksService', () => {
  let service: TgLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
