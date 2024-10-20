import { Injectable } from '@angular/core';
import {TonConnectUI} from "@tonconnect/ui";
import {Account} from "@tonconnect/sdk";
import TonWeb from 'tonweb';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class TonConnectService {

  tonConnectUI: TonConnectUI | null = null;

  init(){
    this.tonConnectUI = new TonConnectUI({
      manifestUrl: 'https://julienkermarec.github.io/VisifyBot/assets/manifest.json',
      // buttonRootId: 'tonconnectbutton',
    });
  }
  async waitUntilConnected(): Promise<void> {
    await this.tonConnectUI?.connectionRestored;
  }

  isWalletConnected(): boolean {
    return this.tonConnectUI?.connected || false;
  }
  
  get account(): Account | null {
    return this.tonConnectUI?.account || null;
  }
}
