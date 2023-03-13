import Search from '@/components/Search';
import Steps from '@/components/steps';
import { data } from '@/data/data';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(0);
  const [foundItems, setFoundItems] = useState([] as number[]);
  const [highlightedItem, setHighlightedItem] = useState(-1);

  const onClick = (direction: '⬆️' | '⬇️') => {
    if (direction == '⬆️') {
      setIndex(index + 1);
    } else {
      setIndex(index - 1 < 0 ? 0 : index - 1);
    }

    setHighlightedItem(foundItems.at(index) ?? -1);
  };
  const onChange = (searchValue: string) => {
    const indecies = data.reduce(
      (acc, d, i) => (d.includes(searchValue) ? [...acc, i] : acc),
      [] as number[]
    );

    setFoundItems(indecies);
    setSearch(searchValue);
  };
  useEffect(() => {
    setHighlightedItem(foundItems.at(index) ?? -1);
  }, [foundItems, index]);

  return (
    <>
      <div style={{ position: 'sticky', top: 0 }}>
        <pre>{foundItems.toString()}</pre>
        <Search
          value={search}
          onChange={onChange}
          index={index}
          onClick={onClick}
        />
      </div>
      <Steps
        value={search}
        index={highlightedItem}
        foundItems={foundItems}
        data={data}
      />
    </>
  );
};

export default Index;
