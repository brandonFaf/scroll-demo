import { useIsFocusedSearchHighlight } from '@/state/isSearchHighlightFocusedState';
import React from 'react';
import ScrollIntoView from './ScrollIntoView';

type Props = {
  data: string;
};

const Step = ({ data }: Props) => {
  const isSearchHighlightFocused = useIsFocusedSearchHighlight(data);
  return (
    <ScrollIntoView shouldScrollIntoView={isSearchHighlightFocused}>
      <li style={{ paddingBlock: 25 }}>{data}</li>
    </ScrollIntoView>
  );
};

export default Step;
