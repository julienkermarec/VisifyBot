import { Inject, Injectable } from '@angular/core';
import { TelegramWebApp, WebApp } from "@m1cron-labs/ng-telegram-mini-app";
import { PlatformInfoService } from 'src/services/environment-services-lib/platform-info/platform-info.service';

@Injectable({
  providedIn: 'root'
})
export class TgPlatformInfoService extends PlatformInfoService {

  private readonly desktopPlatforms = ['windows', 'macos', 'linux', 'web'];

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();
  }

  override isDesktopPlatform(): boolean {
    return this.desktopPlatforms.includes(this.tgWebApp.platform);
  }
}
