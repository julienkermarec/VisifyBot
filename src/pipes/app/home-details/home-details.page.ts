import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DevicesService } from '../../../services/devices.services';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../../services/dialog.service';
import { TonConnectService } from '../../../services/ton-connect.service';
import { BackendApiService } from '../../../services/backend-api.service';
import { ConnectedWallet, toUserFriendlyAddress } from '@tonconnect/ui';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-home-details',
  templateUrl: 'home-details.page.html',
  styleUrls: ['home-details.page.scss']
})
export class HomeDetailsPage {
  private storeService = inject(StoreService);
  private backendApiService = inject(BackendApiService);
  private tonConnectService = inject(TonConnectService);
  private destroyRef = inject(DestroyRef);
  private devicesService = inject(DevicesService);
  private dialogService = inject(DialogService);
  loading = signal<boolean>(false);
  connected = signal<boolean>(false);
  wallet = signal<any>(null);
  friendlyAddress = signal<string | null>(null);
  devices = signal<any>(null);
  device = signal<any>(null);
  newAd = signal<any>( {
    text: '',
    icon: ''
  });
  subscriber:any = null;
  public readonly displayId: string | undefined =
    this.activatedRoute.snapshot.params['id'];
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.connected = this.storeService.connected;
    this.friendlyAddress = this.storeService.friendlyAddress;
    this.wallet = this.storeService.wallet;
    this.initDevices();
  }
  initDevices() {
    this.devices.set(this.devicesService.devices);
    this.device.set(this.devicesService.devices.find((d) => d.uid === this.displayId));
  }


  async publish(): Promise<void> {
    let newAd = this.newAd();
    console.log('publish', this.newAd(), this.device());
    let data:any = {

      "text": newAd.text,
      "rainbow": false,
      "textCase": 0
    }
    if(newAd.icon !== '') {
      data = {...data, icon: newAd.icon, pushIcon: 2}
    }
    let device_id = this.device().uid;
    let owner_id = this.friendlyAddress();
    this.backendApiService?.createAd(device_id, owner_id || '', data);
  }

  async chooseIcon(option?: any): Promise<void> {
    console.log('chooseIcon', option);
    let list:any= [{
      label: 'None',
      value: null
    }, {
      label: 'Telegram',
      value: 'icon1'
    }, {
      label: 'Instagram',
      value: 'icon2'
    }, {
      label: 'Facebook',
      value: 'icon3'
    }]
    let inputs = list.map((o: any) => {
      return {
        type: 'radio',
        label: o.label,
        value: o.value,
        checked: o.value === 'none'
      }
    });
    void this.dialogService.presentAlert({
      header: 'Display text',
      subHeader: 'Update the display text',
      inputs,
      buttons: [
        {
          role: 'cancel',
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          handler: async (event): Promise<void> => {
            console.log('event', event);
            this.newAd.set({...(this.newAd()), icon: event });
            console.log('event after' , this.newAd());
          },
        },
      ],
    });

  }
  async chooseText(option?: any): Promise<void> {
    console.log('chooseText', option);
    let inputs: any = [{
      type: 'text',
      value: '',
      placeholder: this.device().text || '',
      label: 'Text',
      name: 'value',
    }]
    void this.dialogService.presentAlert({
      header: 'Display text',
      subHeader: 'Update the display text',
      inputs,
      buttons: [
        {
          role: 'cancel',
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          handler: async (event): Promise<void> => {
            console.log('event', event);
            this.newAd.set({...(this.newAd()), text: event.value });
          },
        },
      ],
    });
  }
  ionViewDidLeave() {
    if(this.subscriber != null){
      
    this.subscriber.unsubscribe();
    this.subscriber = null;
    }
  }
  async connect(){
    this.storeService.connect();
  }
  async disconnect(){
    this.storeService.disconnect();
  }
}
