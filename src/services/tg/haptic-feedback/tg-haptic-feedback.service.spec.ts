import { TestBed } from '@angular/core/testing';

import { TgHapticFeedbackService } from './tg-haptic-feedback.service';

describe('TgHapticFeedbackService', () => {
  let service: TgHapticFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgHapticFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
