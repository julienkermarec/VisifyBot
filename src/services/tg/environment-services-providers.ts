import { Provider } from "@angular/core";
import { TgThemingService } from "./theming/tg-theming.service";
import { TgStorageService } from "./storage/tg-storage.service";
import { TgBiometryService } from "./biometry/tg-biometry.service";
import { TgBackButtonService } from "./back-button/tg-back-button.service";
import { TgLinksService } from "./links/tg-links.service";
import { TgPlatformInfoService } from "./platform-info/tg-platform-info.service";
import { TgModalService } from "./modal/tg-modal.service";
import { TgHapticFeedbackService } from "./haptic-feedback/tg-haptic-feedback.service";
import { BiometryService } from "../environment-services-lib/biometry/biometry.service";
import { BackButtonService } from "../environment-services-lib/back-button/back-button.service";
import { LinksService } from "../environment-services-lib/links/links-service";
import { PlatformInfoService } from "../environment-services-lib/platform-info/platform-info.service";
import { ModalService } from "../environment-services-lib/modal/modal.service";
import { HapticFeedbackService } from "../environment-services-lib/haptic-feedback/haptic-feedback.service";
import { StorageService } from "../environment-services-lib/storage/storage.service";

export const EnvironmentServicesProviders: Provider[] = [
  {
    provide: TgThemingService,
    useClass: TgThemingService
  },
  {
    provide: TgStorageService,
    useClass: TgStorageService
  },
  {
    provide: BiometryService,
    useClass: TgBiometryService
  },
  {
    provide: BackButtonService,
    useClass: TgBackButtonService
  },
  {
    provide: LinksService,
    useClass: TgLinksService
  },
  {
    provide: PlatformInfoService,
    useClass: TgPlatformInfoService
  },
  {
    provide: ModalService,
    useClass: TgModalService
  },
  {
    provide: HapticFeedbackService,
    useClass: TgHapticFeedbackService
  },
  {
    provide: StorageService,
    useClass: TgStorageService
  }
];
