import { useIsFocusedSearchHighlight } from '@/state/isSearchHighlightFocusedState';
import React from 'react';
import ScrollIntoView from './ScrollIntoView';

type Props = {
  data: string;
  query: string;
};

const Step = ({ data, query }: Props) => {
  const isSearchHighlightFocused = useIsFocusedSearchHighlight(data, query);
  return (
    <ScrollIntoView shouldScrollIntoView={isSearchHighlightFocused}>
      <li style={{ paddingBlock: 25 }}>{data}</li>
    </ScrollIntoView>
  );
};

export default Step;
