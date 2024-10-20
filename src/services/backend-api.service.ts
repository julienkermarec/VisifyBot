import { inject, Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {firstValueFrom, map, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  // private httpClient = inject(HttpClient)
  constructor(private http : HttpClient){

  }
  createAd(device_id:string, owner_id: string, data: any): Observable<any> {
    try {
    console.log('createAd', {device_id, owner_id, data});
    return of(this.http.post<any>(`${environment.backendApiUrl}/api.php?device=${device_id}&owner=${owner_id}`, data).toPromise());
    }
    catch(e){
      console.warn(e);
      return of(void 0)
    }
  }

  // getSnapshots(): Observable<SnapshotResult[]> {
  //   return this.get<SnapshotResult[]>(`${environment.backendApiUrl}/api/tg/snapshots`).pipe(
  //     map((response: any) => response.snap_lst)
  //   );
  // }

  // createUser(snapshot: UserDto): Observable<CreateUserResponse> {
  //   return this.post<CreateUserResponse>(`${environment.backendApiUrl}/api/tg/create_user`, snapshot);
  // }
  
  // appendTransactionIdToSnapshot(snapshotId: string, transactionId: string): Observable<any> {
  //   return this.post(`${environment.backendApiUrl}/api/tg/pay_snapshot/${snapshotId}`, {
  //     tg_transaction_id: transactionId,
  //   });
  // }
  
  
}
