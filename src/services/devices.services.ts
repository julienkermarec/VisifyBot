import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices_list: any[] = [
    {
      ip_address: "10.10.11.147",
      name: "Decentralized by you",
      stats: {},
      status: 1,
      uid: "awtrix_b38878",
      icon: "awtrix_b38878.png",
      owner: 'UQAheDOq-dyX9-yAtBhkRRz_n2VebTB9ovSrL2L5B2l26Vul',
      lastUpdate: new Date().toISOString(),
    },
    {
      ip_address: "10.10.11.148",
      name: "Crypto in every pocket",
      stats: {},
      status: 1,
      uid: "awtrix_460c28",
      icon: "awtrix_460c28.png",
      owner: 'UQAheDOq-dyX9-yAtBhkRRz_n2VebTB9ovSrL2L5B2l26Vul',
      lastUpdate: new Date().toISOString(),
    },
    {
      ip_address: "10.10.11.155",
      name: "Ton",
      stats: {},
      status: 1,
      uid: "awtrix_b75b2c",
      icon: "awtrix_b75b2c.png",
      owner: 'UQAheDOq-dyX9-yAtBhkRRz_n2VebTB9ovSrL2L5B2l26Vul',
      lastUpdate: new Date().toISOString(),
    },
    {
      ip_address: "10.10.11.157",
      name: "Create Owners, Not Followers",
      stats: {},
      status: 1,
      uid: "awtrix_8f4460",
      icon: "awtrix_8f4460.png",
      owner: 'UQAheDOq-dyX9-yAtBhkRRz_n2VebTB9ovSrL2L5B2l26Vul',
      lastUpdate: new Date().toISOString(),
    },
  ]  
  
  get devices(): any[] {
    return this.devices_list
  }
}
