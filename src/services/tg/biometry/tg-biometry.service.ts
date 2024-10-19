import { Inject, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { BiometricManager, TelegramWebApp, WebApp } from "@m1cron-labs/ng-telegram-mini-app";
import { BiometryService } from 'src/services/environment-services-lib/biometry/biometry.service';

@Injectable()
export class TgBiometryService extends BiometryService {
  private biometricManager: BiometricManager | null = null;

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();

    if (tgWebApp.isVersionAtLeast('7.2')) {
      tgWebApp.BiometricManager.init(() => {
        this.biometricManager = tgWebApp.BiometricManager;
      });
    }
  }

  override isBiometryAvailable(): Observable<boolean> {
    if (this.biometricManager == null) {
      return of(false);
    }

    return of(this.biometricManager.isBiometricAvailable);
  }

  override requestAccess(reason:string): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      this.biometricManager!.requestAccess( { reason }, (isGranted: boolean) => {
        subscriber.next(isGranted);
        subscriber.complete();
      });
    });
  }

  override authenticate(reason: string): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      this.biometricManager!.authenticate( { reason }, (isAuthenticated: boolean) => {
        subscriber.next(isAuthenticated);
        subscriber.complete();
      });
    });
  }
}
