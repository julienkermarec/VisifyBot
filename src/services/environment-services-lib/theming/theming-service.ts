import { ThemeConfig, ThemeConfigKey } from "./theming-service.models";


export abstract class ThemingService {
  abstract getThemeConfig(): ThemeConfig;

  abstract getConfigForComponent<T extends ThemeConfigKey>(componentName: T): ThemeConfig[T];
}
