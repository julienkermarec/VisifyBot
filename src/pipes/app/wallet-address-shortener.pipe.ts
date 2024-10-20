import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletAddressShortener'
})
export class WalletAddressShortenerPipe implements PipeTransform {
  transform(address: string, prefixLength: number = 4, suffixLength: number = 4): string {
    if (!address) {
      return '';
    }

    let cleanAddress = address.startsWith('0:') ? address.slice(2) : address;
    // Séparer l'adresse en deux parties si elle contient ":"
    const parts = cleanAddress.split(':');
    const mainPart = parts.length > 1 ? parts[1] : parts[0];

    if (mainPart.length <= prefixLength + suffixLength) {
      return cleanAddress;
    }

    const prefix = mainPart.slice(0, prefixLength);
    const suffix = mainPart.slice(-suffixLength);

    // Reconstruire l'adresse avec le préfixe d'origine si présent
    return parts.length > 1
      ? `${parts[0]}:${prefix}...${suffix}`
      : `${prefix}...${suffix}`;
  }
}