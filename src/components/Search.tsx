import { useCountOfHighlightedSteps } from '@/state/countOfhighlightedSteps';
import { focusedResultIndexState } from '@/state/focusedResultIndexState';

import { useCallback, ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

const Search = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) => {
  const countOfResults = useCountOfHighlightedSteps({ query });

  const [focusedResultIndex, setFocusedResultIndex] = useRecoilState(
    focusedResultIndexState('search')
  );
  const onFocusNextResult = useCallback(() => {
    setFocusedResultIndex(i => (i + 1 >= countOfResults ? 0 : i + 1));
  }, [countOfResults, setFocusedResultIndex]);
  const onFocusPrevResult = useCallback(() => {
    setFocusedResultIndex(i => (i - 1 < 0 ? countOfResults - 1 : i - 1));
  }, [countOfResults, setFocusedResultIndex]);
  const onChangeQuery = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );
  const onSearchKeyDown = useCallback(async () => {
    setFocusedResultIndex(0);
  }, [setFocusedResultIndex]);
  return (
    <header>
      <input onChange={onChangeQuery} value={query} />
      <button onClick={onFocusPrevResult}>⬇️</button>
      <span>{focusedResultIndex}</span>
      <button onClick={onFocusNextResult}>⬆️</button>
    </header>
  );
};

export default Search;
