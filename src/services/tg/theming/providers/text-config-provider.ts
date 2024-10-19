import { ThemeParams } from "@m1cron-labs/ng-telegram-mini-app";
import { ThemeReadingHelper } from "../theme-reading.helper";
import { TgColorScheme } from "../tg-theming.models";
import { TextConfig } from "src/services/environment-services-lib/theming/theming-service.models";

export class TextConfigProvider {
  private static config?: TextConfig;

  static getConfig(tgThemeParam: ThemeParams, currentScheme: TgColorScheme): TextConfig {
    if (this.config == null) {
      this.config = {
        textColor: ThemeReadingHelper.getValue(
          tgThemeParam.text_color,
          '#000000',
          '#f5f5f5',
          currentScheme
        ),
        subtitleTextColor: ThemeReadingHelper.getValue(
          tgThemeParam.subtitle_text_color,
          '#999999',
          '#708499',
          currentScheme
        ),
        sectionHeaderTextColor: ThemeReadingHelper.getValue(
          tgThemeParam.section_header_text_color,
          '#168dcd',
          '#6ab3f3',
          currentScheme
        ),
        accentTextColor: ThemeReadingHelper.getValue(
          tgThemeParam.accent_text_color,
          '#168dcd',
          '#6ab2f2',
          currentScheme
        ),
        destructiveTextColor: ThemeReadingHelper.getValue(
          tgThemeParam.destructive_text_color,
          '#d14e4e',
          '#ec3942',
          currentScheme
        ),
        hintColor: ThemeReadingHelper.getValue(
          tgThemeParam.hint_color,
          '#999999',
          '#708499',
          currentScheme
        ),
        linkColor: ThemeReadingHelper.getValue(
          tgThemeParam.link_color,
          '#168dcd',
          '#6ab3f3',
          currentScheme
        ),
      }

      Object.seal(this.config);
    }

    return this.config;
  }
}
