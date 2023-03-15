import { useIsFocusedSearchHighlight } from '@/state/isSearchHighlightFocusedState';
import React, { useEffect } from 'react';
import ScrollIntoView from './ScrollIntoView';

type Props = {
  data: string;
  query: string;
};

const Step = ({ data, query }: Props) => {
  const isSearchHighlightFocused = useIsFocusedSearchHighlight(data, query);
  const ref = React.useRef<HTMLLIElement>(null);
  useEffect(() => {
    console.log('run effect, shouldScollIntoView', isSearchHighlightFocused);
    if (isSearchHighlightFocused) {
      const domNode = document.getElementById(data);
      const shouldRun =
        domNode && domNode instanceof Element && domNode.scrollIntoView;

      console.log('shouldRun:', shouldRun);
      console.log('domNode:', domNode);
      if (domNode && shouldRun) {
        // setTimeout(() => {
        domNode.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        // }, 0);
      }
    }
  }, [isSearchHighlightFocused, ref, data]);
  return (
    // <ScrollIntoView elRef={ref} shouldScrollIntoView={isSearchHighlightFocused}>
    <li ref={ref} id={data} style={{ paddingBlock: 25 }}>
      {data}
    </li>
    // </ScrollIntoView>
  );
};

export default Step;
