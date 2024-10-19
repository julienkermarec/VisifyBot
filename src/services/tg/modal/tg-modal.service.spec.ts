import { TestBed } from '@angular/core/testing';

import { TgModalService } from './tg-modal.service';

describe('TgModalService', () => {
  let service: TgModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
