import { useCountOfHighlightedSteps } from '@/state/countOfhighlightedSteps';
import { focusedResultIndexState } from '@/state/focusedResultIndexState';
import { useSearchQuery } from '@/state/queryState';
import { useCallback, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

const Search = () => {
  const [query, setQuery] = useSearchQuery('search');
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
  const onSearchKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLElement>) => {
      setFocusedResultIndex(0);
    },
    [setFocusedResultIndex]
  );
  return (
    <header>
      <input
        onChange={onChangeQuery}
        value={query}
        onKeyDown={onSearchKeyDown}
      />
      <button onClick={onFocusPrevResult}>⬇️</button>
      <span>{focusedResultIndex}</span>
      <button onClick={onFocusNextResult}>⬆️</button>
    </header>
  );
};

export default Search;
