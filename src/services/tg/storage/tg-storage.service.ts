import { Inject, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CloudStorage, TelegramWebApp, WebApp } from "@m1cron-labs/ng-telegram-mini-app";
import { StorageService } from 'src/services/environment-services-lib/storage/storage.service';

@Injectable()
export class TgStorageService extends StorageService {

  private readonly storage: CloudStorage | null = null;

  constructor(
    @Inject(TelegramWebApp) private readonly tgWebApp: WebApp
  ) {
    super();
    if (tgWebApp.isVersionAtLeast('6.9')) {
      this.storage = tgWebApp.CloudStorage;
    }
  }

  override getItem(itemKey: string): Observable<string | null> {
    if (this.storage == null) {
      return of(localStorage.getItem(itemKey));
    }

    return new Observable<string | null>(subscriber => {
      this.storage!.getItem(itemKey, (error: Error | null, value?: string) => {
        if (error != null) {
          subscriber.error(error);
          return;
        }

        subscriber.next((value?.length ?? 0) > 0 ? value : null);
        subscriber.complete();
      });
    })
  }

  override setItem(itemKey: string, value: string): Observable<boolean> {
    if (this.storage == null) {
      localStorage.setItem(itemKey, value);
      return of(true);
    }

    return new Observable<boolean>(subscriber => {
      this.storage!.setItem(itemKey, value, (error: Error | null, success?: boolean) => {
        if (error != null) {
          subscriber.error(error);
          return;
        }

        subscriber.next(success ?? false);
        subscriber.complete();
      });
    });
  }

  override removeItem(itemKey: string): Observable<boolean> {
    if (this.storage == null) {
      localStorage.removeItem(itemKey);
      return of(true);
    }

    return new Observable<boolean>(subscriber => {
      this.storage!.removeItem(itemKey, (error: Error | null, success?: boolean) => {
        if (error != null) {
          subscriber.error(error);
          return;
        }

        subscriber.next(success ?? false);
        subscriber.complete();
      });
    });
  }
}
