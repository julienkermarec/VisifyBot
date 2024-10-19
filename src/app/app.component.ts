import { Component, Inject, OnInit } from '@angular/core';
import { TelegramWebApp, WebApp } from '@m1cron-labs/ng-telegram-mini-app';
import { ImpactHapticStyle } from 'src/services/environment-services-lib/haptic-feedback/haptic-feedback-service.model';
import { HapticFeedbackService } from 'src/services/environment-services-lib/haptic-feedback/haptic-feedback.service';
import { PlatformInfoService } from 'src/services/environment-services-lib/platform-info/platform-info.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isDesktopPlatform = false;
  constructor(
    @Inject(TelegramWebApp)
    private readonly tgWebApp: WebApp,
    private readonly platformInfoService: PlatformInfoService,
    private readonly hapticFeedbackService: HapticFeedbackService,
   ) {
      
    this.tgWebApp.ready();
  }

  ngOnInit() {

    this.hapticFeedbackService.impactOccurred(ImpactHapticStyle.Light);
    this.isDesktopPlatform = this.platformInfoService.isDesktopPlatform();
  }
}
