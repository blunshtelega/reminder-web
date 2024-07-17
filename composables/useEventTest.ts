// I only use the 3 types most of the time, so...
type DOMEventMapDefinitions = [
  [HTMLElement, HTMLElementEventMap],
  [Window, WindowEventMap],
  [Document, DocumentEventMap],
];

type DOMEventSubscriber = DOMEventMapDefinitions[number][0];
type MapDefinitionToEventMap<D extends { [K: number]: any[] }, T> = {
  [K in keyof D]: D[K] extends any[]
    ? T extends D[K][0]
      ? D[K][1]
      : never
    : never;
}[number];

type GetEventMapFromByElement<T extends DOMEventSubscriber> =
  MapDefinitionToEventMap<DOMEventMapDefinitions, T>;

// usage
function customAddEventListener<
  Element extends DOMEventSubscriber,
  Type extends keyof GetEventMapFromByElement<Element> & string,
  Event extends GetEventMapFromByElement<Element>[Type]
>(element: Element, eventType: Type, listener: (event: Event) => any, options?: boolean | AddEventListenerOptions) {
  element.addEventListener(eventType, listener as EventListener, options);
}