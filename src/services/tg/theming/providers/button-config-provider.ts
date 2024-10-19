
import { ThemeParams } from "@m1cron-labs/ng-telegram-mini-app";
import { ThemeReadingHelper } from "../theme-reading.helper";
import { TgColorScheme } from "../tg-theming.models";
import { ButtonConfig } from "src/services/environment-services-lib/theming/theming-service.models";

export class ButtonConfigProvider {
  private static config?: ButtonConfig;

  static getConfig(tgThemeParam: ThemeParams, currentScheme: TgColorScheme): ButtonConfig {
    if (this.config == null) {
      this.config = {
        buttonBgColor: ThemeReadingHelper.getValue(
          tgThemeParam.button_color,
          '#40a7e3',
          '#5288c1',
          currentScheme
        ),
        buttonTextColor: ThemeReadingHelper.getValue(
          tgThemeParam.button_text_color,
          '#f1f1f1',
          '#ffffff',
          currentScheme
        )
      };

      Object.seal(this.config);
    }

    return this.config;
  }
}
