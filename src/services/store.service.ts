import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import { TonConnectService } from './ton-connect.service';
import { ConnectedWallet, toUserFriendlyAddress } from '@tonconnect/ui';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private tonConnectService = inject(TonConnectService);
  private destroyRef = inject(DestroyRef);
  loading = signal<boolean>(false);
  subscriber:any = null;
  connected = signal<boolean>(false);
  wallet = signal<any>(null);
  friendlyAddress = signal<string | null>(null);
  constructor(){
    this.initWallet();
  }
  initWallet() {
    this.tonConnectService.init();
    this.subscriber = this.tonConnectService.tonConnectUI?.onStatusChange(async (wallet: ConnectedWallet | null) => {
      console.log("Connected wallet:", wallet);
      if (wallet?.account) {
        this.loading.set(true);
        try {
          let isTestnet = wallet.account.chain === '-3'
          let friendlyAddress = toUserFriendlyAddress(
            wallet.account.address,
            isTestnet
          )
          this.friendlyAddress.set(friendlyAddress);
          this.connected.set(true);
          this.loading.set(false);
          this.wallet.set(wallet);

          console.log("Creating user and snapshot...", {
            connected: await this.tonConnectService.tonConnectUI?.connected,
            debug: await this.tonConnectService.tonConnectUI?.getWallets(),
            wallet: this.tonConnectService.tonConnectUI?.wallet,
            account: this.tonConnectService.tonConnectUI?.account
          });
          console.log("Connected wallet friendlyAddress", friendlyAddress);
          // this.finishService.createUserAndSnapshot().pipe(
          //   takeUntilDestroyed(this.destroyRef)
          // ).subscribe(() => {
          //   this.router.navigate(['/dashboard']);
          // });
        } catch (error) {
          console.error(error);
          this.loading.set(false);
        }
      }
    });

    this.destroyRef.onDestroy(() => {
      if (this.subscriber != null)
        this.subscriber.unsubscribe();
    })
  }

  disconnect(): void {
    this.loading.set(true);
    this.tonConnectService.tonConnectUI?.disconnect();
    this.connected.set(false);
    this.loading.set(false);
    this.wallet.set(null);
  }
  connect(): void {
    this.tonConnectService.tonConnectUI?.openModal();

  }
}
