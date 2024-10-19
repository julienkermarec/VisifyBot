export abstract class LinksService {
  abstract openBrowserLink(url: string): void;
  abstract openApplicationLink(url: string): void;
}
