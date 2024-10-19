import { TgColorScheme } from "./tg-theming.models";

export class ThemeReadingHelper {
  static getValue(
    value: string | undefined,
    lightSchemeFallback: string,
    darkSchemeFallback: string,
    currentScheme: TgColorScheme
  ): string {
    if(value != null) {
      return value;
    }

    if((currentScheme ?? TgColorScheme.Light) === TgColorScheme.Light) {
      return lightSchemeFallback;
    } else {
      return darkSchemeFallback;
    }
  }
}
