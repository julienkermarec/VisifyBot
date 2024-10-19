export enum ButtonType {
  Default = "default",
  Ok = "ok",
  Close = "close",
  Cancel = "cancel",
  Destructive = "destructive"
}

export interface ModalButton {
  id?: string;
  type?: ButtonType;
  text?: string;
}

export interface ModalParams {
  message: string;
  title?: string;
  buttons?: ModalButton[]
}
