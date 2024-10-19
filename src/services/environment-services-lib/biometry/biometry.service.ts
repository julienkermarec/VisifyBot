import { Observable } from "rxjs";

export abstract class BiometryService {

  abstract isBiometryAvailable(): Observable<boolean>;

  abstract requestAccess(reason: string): Observable<boolean>;

  abstract authenticate(reason: string): Observable<boolean>;
}
