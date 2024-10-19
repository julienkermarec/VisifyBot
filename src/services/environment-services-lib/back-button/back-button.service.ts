export abstract class BackButtonService {

  abstract get isAvailable(): boolean;

  abstract get isVisible(): boolean;

  abstract show(): void;

  abstract hide(): void;

  abstract onClick(cb: () => void): void;

  abstract offClick(cb: () => void): void;
}
