import React from 'react';
import ScrollIntoView from './ScrollIntoView';

type Props = {
  data: string;
  query: string;
};

const Step = ({ data, query }: Props) => {
  const isSearchHighlightFocused = useIsFocusedSearchHighlight(data, query);
  return (
    <ScrollIntoView shouldScrollIntoView={isFocused}>
      <li style={{ paddingBlock: 25 }}>
        {data} - {isFocused.toString()}
      </li>
    </ScrollIntoView>
  );
};

export default Step;
