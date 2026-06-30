import { useRef } from "react";

type SwipeHandlers = {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

export const useSwipe = (
  onNext: () => void,
  onPrev: () => void,
): SwipeHandlers => {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const startTime = useRef<number>(0);
  const isDragging = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    // Ignore multi-touch
    if (e.touches.length > 1) return;

    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    startTime.current = Date.now();
    isDragging.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (
      !isDragging.current ||
      startX.current === null ||
      startY.current === null
    )
      return;

    const diffX = startX.current - e.touches[0].clientX;
    const diffY = startY.current - e.touches[0].clientY;

    // If scrolling vertically, cancel the swipe
    if (Math.abs(diffY) > Math.abs(diffX)) {
      isDragging.current = false;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const diffX = startX.current - e.changedTouches[0].clientX;
    const elapsed = Date.now() - startTime.current;

    const velocity = Math.abs(diffX) / elapsed; // px/ms

    // Trigger on sufficient distance OR quick flick
    const distanceThreshold = 50; // px
    const velocityThreshold = 0.3; // px/ms

    if (Math.abs(diffX) > distanceThreshold || velocity > velocityThreshold) {
      if (diffX > 0) onNext();
      else onPrev();
    }

    startX.current = null;
    startY.current = null;
    isDragging.current = false;
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
