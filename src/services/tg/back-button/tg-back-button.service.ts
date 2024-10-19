import { Inject, Injectable } from '@angular/core';
import { BackButton, TelegramWebApp, WebApp } from "@m1cron-labs/ng-telegram-mini-app";
import { BackButtonService } from 'src/services/environment-services-lib/back-button/back-button.service';

@Injectable()
export class TgBackButtonService extends BackButtonService {

  private readonly backButton: BackButton | null = null;

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();

    if (tgWebApp.isVersionAtLeast('6.1')) {
      this.backButton = tgWebApp.BackButton;
    }
  }

  override get isAvailable(): boolean {
    return this.backButton != null;
  }

  override get isVisible(): boolean {
    return this.backButton?.isVisible ?? false;
  }

  override show() {
    this.backButton?.show();
  }

  override hide() {
    this.backButton?.hide();
  }

  override onClick(cb: () => void) {
    this.backButton?.onClick(cb);
  }

  override offClick(cb: () => void) {
    this.backButton?.offClick(cb);
  }
}
