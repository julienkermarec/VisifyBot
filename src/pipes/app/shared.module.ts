import { NgModule } from '@angular/core';
import { WalletAddressShortenerPipe } from './wallet-address-shortener.pipe';

@NgModule({
  declarations: [WalletAddressShortenerPipe],
  exports: [WalletAddressShortenerPipe]
})
export class SharedModule { }