import { TgColorScheme } from "src/services/tg/theming/tg-theming.models";

export interface Theme {
  currentScheme: TgColorScheme;
}

export interface BackgroundConfig {
  bgColor: string;
  secondaryBgColor: string;
  headerBgColor: string;
  sectionBgColor: string;
  sectionSeparatorColor: string;
}

export interface TextConfig {
  textColor: string;
  subtitleTextColor: string;
  hintColor: string;
  linkColor: string;
  accentTextColor: string;
  sectionHeaderTextColor: string;
  destructiveTextColor: string;
}

export interface ButtonConfig {
  buttonBgColor: string;
  buttonTextColor: string;
}

export interface ThemeConfig {
  theme: Theme;
  background: BackgroundConfig;
  text: TextConfig;
  button: ButtonConfig;
}

export type ThemeConfigKey = keyof ThemeConfig;
