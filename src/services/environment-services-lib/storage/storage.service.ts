import { Observable } from "rxjs";

export abstract class StorageService {

  abstract getItem(itemKey: string): Observable<string | null>;

  abstract setItem(itemKey: string, value: string): Observable<boolean>;

  abstract removeItem(itemKey: string): Observable<boolean>;
}
