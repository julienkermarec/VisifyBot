import { Component, DestroyRef, Inject, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TonConnectService } from '../../../services/ton-connect.service';
import { ConnectedWallet, toUserFriendlyAddress } from '@tonconnect/ui';
import { DevicesService } from '../../../services/devices.services';
import { UserService } from '../../../services/user.service';
import { NavController } from '@ionic/angular';
import { StoreService } from '../../../services/store.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private userService = inject(UserService);
  private storeService = inject(StoreService);
  private devicesService = inject(DevicesService);
  viewportBorder = '';
  // cloud storage
  cloudStorageKeys: any = {};
  cloudStorageItems: any = {};
  form = { key: '', value: '' };
  searchTerm: any = ''
  subscriber:any = null;


  loading = signal<boolean>(false);
  devices = signal<any>(null);
  connected = signal<boolean>(false);
  wallet = signal<any>(null);
  friendlyAddress = signal<string | null>(null);




  constructor(
    private navController: NavController
  ) {
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnInit() {
    // this.initUser();
    // this.storeService
    this.initDevices();
    // window.addEventListener('load', () => {
    // this.initUser();
    // });
    this.connected = this.storeService.connected;
    this.friendlyAddress = this.storeService.friendlyAddress;
    this.wallet = this.storeService.wallet;
  }


  ionViewDidLeave() {
  }

  async connect(){
    this.storeService.connect();
  }
  async disconnect(){
    this.storeService.disconnect();
  }
  async goToDetails(display: any){
    console.log('goToDetails', this.subscriber);
    if(this.subscriber != null){
      
      // this.subscriber.unsubscribe();
      this.subscriber = null;
      }
    return this.navController.navigateForward(['/tabs/home/' + display.uid], {});
  }
  async initUser(){
    console.log('ngOnInit');
    try {
      await this.userService.init(5000,2000);
      let initData = this.userService.getInitData();
      console.log(this.userService.getInitDataUnsafe());
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de Telegram WebApp:', error);
      console.log('window.Telegram.WebApp.initDataUnsafe.user', window.Telegram.WebApp.initDataUnsafe.user);
      // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    }
  }

  // initUser() {
  //   // let user = this.telegramService.initialize;
  // //   let user = this.telegramService.user;
  // //   console.log('user', user);
  // //   setTimeout(() => {
  // //   let user = this.telegramService.user;
  // //   console.log('user', user);
  // // }, 1000);
  // }
  initDevices() {
    this.devices.set(this.devicesService.devices);
  }
  public trackByIndex(index: number): number {
    return index;
  }

  search(event: any){
    console.log("search", this.searchTerm, event);
  }
}