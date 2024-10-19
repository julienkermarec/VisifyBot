import { Observable } from "rxjs";
import { ModalParams } from "./modal-service.model";

export abstract class ModalService {

  abstract showMessage(params: ModalParams): Observable<string>;
}
