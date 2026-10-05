type ScrollListener = () => void;

const listeners = new Set<ScrollListener>();
let attached = false;
let ticking = false;

function flush() {
  ticking = false;
  listeners.forEach((listener) => listener());
}

function onFrame() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(flush);
}

function attach() {
  if (attached || typeof window === "undefined") return;
  attached = true;
  window.addEventListener("scroll", onFrame, { passive: true });
  window.addEventListener("resize", onFrame);
}

function detach() {
  if (!attached || listeners.size > 0) return;
  attached = false;
  window.removeEventListener("scroll", onFrame);
  window.removeEventListener("resize", onFrame);
}

export function subscribeScroll(listener: ScrollListener) {
  listeners.add(listener);
  attach();
  listener();
  return () => {
    listeners.delete(listener);
    detach();
  };
}
