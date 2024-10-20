import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices_list: any[] = [
    {
      ip_address: "10.10.10.100",
      name: "Device 1",
      stats: {},
      status: 1,
      uid: "awtrix_b38878",
    },
    {
      ip_address: "10.10.10.104",
      name: "Device 2",
      stats: {},
      status: 1,
      uid: "awtrix_460c28",
    },
    {
      ip_address: "192.168.1.21",
      name: "Device 3",
      stats: {},
      status: 1,
      uid: "awtrix_8f4460",
    },
    {
      ip_address: "192.168.1.28",
      name: "Device 4",
      stats: {},
      status: 1,
      uid: "awtrix_b75b2c",
    },
  ]  
  
  get devices(): any[] {
    return this.devices_list
  }
}
