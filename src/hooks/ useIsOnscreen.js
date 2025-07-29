import React from 'react';

function useIsOnscreen(elementRef, threshold = 1) {
  const [isOnscreen, setIsOnscreen] = React.useState(false);

  React.useEffect(() => {
    if (!elementRef.current) {
      return null;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsOnscreen(entry.intersectionRatio >= threshold);
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold]);

  return isOnscreen;
}


export default useIsOnscreen;