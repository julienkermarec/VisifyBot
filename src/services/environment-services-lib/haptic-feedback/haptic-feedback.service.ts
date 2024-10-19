import { ImpactHapticStyle, NotificationHapticStyle } from "./haptic-feedback-service.model";

export abstract class HapticFeedbackService {

  abstract impactOccurred(style: ImpactHapticStyle): void;

  abstract notificationOccurred(style: NotificationHapticStyle): void;
}
