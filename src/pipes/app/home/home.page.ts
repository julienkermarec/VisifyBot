import { Component, DestroyRef, Inject, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TonConnectService } from '../../../services/ton-connect.service';
import { ConnectedWallet, toUserFriendlyAddress } from '@tonconnect/ui';
import { DevicesService } from '../../../services/devices.services';
import { TelegramService } from '../../../services/telegram.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private telegramService = inject(TelegramService);
  private devicesService = inject(DevicesService);
  private tonConnectService = inject(TonConnectService);
  private destroyRef = inject(DestroyRef);
  viewportBorder = '';
  // cloud storage
  cloudStorageKeys: any = {};
  cloudStorageItems: any = {};
  form = { key: '', value: '' };
  searchTerm: any = ''


  loading = signal<boolean>(false);
  devices = signal<any>(null);
  connected = signal<boolean>(false);
  wallet = signal<any>(null);
  friendlyAddress = signal<string | null>(null);




  constructor(
  ) {
  }

  ngOnDestroy() {
    console.debug('ngOnDestroy');
  }

  ngOnInit() {
    console.debug('Telegram Web App is ready');
    this.initUser();
    this.initWallet();
    this.initDevices();
  }

  initUser() {
    // let user = this.telegramService.initialize;
    let user = this.telegramService.user;
    console.log('user', user);
    setTimeout(() => {
    let user = this.telegramService.user;
    console.log('user', user);
  }, 1000);
  }
  initDevices() {
    this.devices.set(this.devicesService.devices);
  }
  initWallet() {
    this.tonConnectService.init();
    const unsubscribe = this.tonConnectService.tonConnectUI?.onStatusChange(async (wallet: ConnectedWallet | null) => {
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
      if (unsubscribe)
        unsubscribe();
    })
  }

  disconnect(): void {
    this.loading.set(true);
    this.tonConnectService.tonConnectUI?.disconnect();
    this.connected.set(false);
    this.loading.set(false);
    this.wallet.set(null);
  }
  public trackByIndex(index: number): number {
    return index;
  }
  connect(): void {
    this.tonConnectService.tonConnectUI?.openModal();

  }

  search(event: any){
    console.log("search", this.searchTerm, event);
  }
}