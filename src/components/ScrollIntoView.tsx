import { FC, useRef, useEffect, useCallback, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  shouldScrollIntoView?: boolean;
  behavior?: 'auto' | 'smooth';
  vertical?: ScrollLogicalPosition;
  horizontal?: ScrollLogicalPosition;
  /** Offset from the top of the scroll target */
  offset?: number;
}

const ScrollIntoView: FC<Props> = ({
  children,
  shouldScrollIntoView = true,
  behavior = 'smooth',
  vertical = 'center',
  offset = 0,
  horizontal,
}) => {
  const domNodeRef = useRef<HTMLDivElement>(null);

  const scrollIntoView = useCallback(() => {
    const domNode = domNodeRef.current;
    const shouldRun =
      domNode && domNode instanceof Element && domNode.scrollIntoView;

    if (domNode && shouldRun) {
      setTimeout(() => {
        domNode.scrollIntoView({
          behavior,
          block: vertical,
          inline: horizontal,
        });
      }, 100);
    }
  }, [behavior, vertical, horizontal]);

  useEffect(() => {
    if (shouldScrollIntoView) {
      scrollIntoView();
    }
  }, [shouldScrollIntoView, scrollIntoView]);

  const style = {
    paddingTop: offset,
    marginTop: -offset,
  };

  return (
    <div ref={domNodeRef} style={style}>
      {children}
    </div>
  );
};

export default ScrollIntoView;
