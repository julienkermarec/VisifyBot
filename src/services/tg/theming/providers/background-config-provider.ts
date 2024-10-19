
import { ThemeParams } from "@m1cron-labs/ng-telegram-mini-app";
import { ThemeReadingHelper } from "../theme-reading.helper";
import { TgColorScheme } from "../tg-theming.models";
import { BackgroundConfig } from "src/services/environment-services-lib/theming/theming-service.models";

export class BackgroundConfigProvider {
  private static config?: BackgroundConfig;

  static getConfig(tgThemeParam: ThemeParams, currentScheme: TgColorScheme): BackgroundConfig {
    if (this.config == null) {
      this.config = {
        bgColor: ThemeReadingHelper.getValue(
          tgThemeParam.bg_color,
          '#ffffff',
          '#17212b',
          currentScheme
        ),
        secondaryBgColor: ThemeReadingHelper.getValue(
          tgThemeParam.secondary_bg_color,
          '#f1f1f1',
          '#232e3c',
          currentScheme
        ),
        headerBgColor: ThemeReadingHelper.getValue(
          tgThemeParam.header_bg_color,
          '#ffffff',
          '#17212b',
          currentScheme
        ),
        sectionBgColor: ThemeReadingHelper.getValue(
          tgThemeParam.section_bg_color,
          '#ffffff',
          '#17212b',
          currentScheme
        ),
        sectionSeparatorColor: ThemeReadingHelper.getValue(
          tgThemeParam.section_separator_color,
          '#e7e7e7',
          '#111921',
          currentScheme
        ),
      }

      Object.seal(this.config);
    }

    return this.config;
  }
}
