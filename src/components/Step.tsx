import React from 'react';
import ScrollIntoView from './ScrollIntoView';

type Props = {
  data: string;
  //   shouldBeHighlighted: boolean;
  isFocused: boolean;
};

const Step = ({ data, isFocused }: Props) => {
  return (
    <ScrollIntoView shouldScrollIntoView={isFocused}>
      <li style={{ paddingBlock: 25 }}>
        {data} - {isFocused.toString()}
      </li>
    </ScrollIntoView>
  );
};

export default Step;
