import { onMounted, onUnmounted } from 'vue'

enum EventTypes {
  // MouseEvent,
  MouseWheelEvent,
  DragEvent,

  Event,
  UIEvent,
  AnimationEvent,
  MouseEvent,
  InputEvent,
  WheelEvent,


  ChangeEvent,
  ClipboardEvent,
  CompositionEvent, 
  FocusEvent, 
  FormEvent,
  KeyboardEvent,
  PointerEvent, 
  TouchEvent, 
  TransitionEvent, 
  SyntheticEvent,
}

export function useEventListener(target: GlobalEventHandlers, event:  keyof GlobalEventHandlersEventMap, callback: any) {
  // если вы хотите, вы также можете сделать так, чтобы
  // это поддерживало строки селектора в качестве цели
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}