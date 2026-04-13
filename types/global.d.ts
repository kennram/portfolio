export {};

declare global {
  interface Window {
    gtag: (
      type: 'event' | 'config',
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        [key: string]: any;
      }
    ) => void;
  }
}
