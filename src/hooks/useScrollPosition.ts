import * as React from 'react';

export const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    function handler() {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }
    if (
      scrollPosition.x !== window.scrollX ||
      scrollPosition.y !== window.scrollY
    ) {
      handler();
    }
    document.addEventListener('scroll', handler);
    return () => document.removeEventListener('scroll', handler);
  }, []);

  return scrollPosition;
};

interface ScrollPosition {
  x: number;
  y: number;
}
