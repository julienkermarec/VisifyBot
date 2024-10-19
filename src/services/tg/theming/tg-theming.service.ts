import {
  Inject,
  Injectable
} from "@angular/core";
import {
  TelegramWebApp,
  WebApp
} from "@m1cron-labs/ng-telegram-mini-app";
import { TgColorScheme } from "./tg-theming.models";
import { BackgroundConfigProvider } from "./providers/background-config-provider";
import { TextConfigProvider } from "./providers/text-config-provider";
import { ButtonConfigProvider } from "./providers/button-config-provider";
import { ThemingService } from "src/services/environment-services-lib/theming/theming-service";
import { ThemeConfig, ThemeConfigKey } from "src/services/environment-services-lib/theming/theming-service.models";

@Injectable()
export class TgThemingService extends ThemingService {
  private config: ThemeConfig | null = null;

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();
  }

  override getThemeConfig(): ThemeConfig {
    if (this.config == null) {
      const themeParameters = this.tgWebApp?.themeParams;
      const currentScheme = <TgColorScheme>(this.tgWebApp?.colorScheme ?? TgColorScheme.Light);

      this.config = {
        theme: {
          currentScheme
        },
        background: BackgroundConfigProvider.getConfig(themeParameters, currentScheme),
        text: TextConfigProvider.getConfig(themeParameters, currentScheme),
        button: ButtonConfigProvider.getConfig(themeParameters, currentScheme),
      }

      Object.seal(this.config);
    }

    return this.config;
  }

  override getConfigForComponent<T extends ThemeConfigKey>(componentName: T): ThemeConfig[T] {
    return this.getThemeConfig()[componentName];
  }
}
