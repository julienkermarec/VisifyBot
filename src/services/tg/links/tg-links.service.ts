import {
  Inject,
  Injectable
} from '@angular/core';
import {
  TelegramWebApp,
  WebApp
} from "@m1cron-labs/ng-telegram-mini-app";
import { LinksService } from 'src/services/environment-services-lib/links/links-service';

@Injectable()
export class TgLinksService extends LinksService {
  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();
  }

  openApplicationLink(url: string): void {
    this.tgWebApp.openTelegramLink(url);
  }

  openBrowserLink(url: string): void {
    this.tgWebApp.openLink(url)
  }

}
