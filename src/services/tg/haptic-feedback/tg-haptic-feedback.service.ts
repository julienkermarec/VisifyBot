import { Inject, Injectable } from '@angular/core';
import { HapticFeedback, NotificationType, TelegramWebApp, WebApp } from "@m1cron-labs/ng-telegram-mini-app";
import { ImpactHapticStyle, NotificationHapticStyle } from 'src/services/environment-services-lib/haptic-feedback/haptic-feedback-service.model';
import { HapticFeedbackService } from 'src/services/environment-services-lib/haptic-feedback/haptic-feedback.service';

@Injectable({
  providedIn: 'root'
})
export class TgHapticFeedbackService extends HapticFeedbackService {

  private hapticFeedbackCtx: HapticFeedback | null = null;

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();

    if (tgWebApp.isVersionAtLeast('6.1')) {
      this.hapticFeedbackCtx = tgWebApp.HapticFeedback;
    }
  }

  override impactOccurred(style: ImpactHapticStyle) {
    this.hapticFeedbackCtx?.impactOccurred(style);
  }

  override notificationOccurred(style: NotificationHapticStyle) {
    switch (style) {
      case NotificationHapticStyle.Error:
        this.hapticFeedbackCtx?.notificationOccurred(NotificationType.Error);
        break;
      case NotificationHapticStyle.Warning:
        this.hapticFeedbackCtx?.notificationOccurred(NotificationType.Warning);
        break;
      case NotificationHapticStyle.Success:
        this.hapticFeedbackCtx?.notificationOccurred(NotificationType.Success);
        break;
    }
  }
}
