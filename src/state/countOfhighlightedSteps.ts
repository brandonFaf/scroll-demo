import { data } from '@/data/data';
import { selectorFamily, useRecoilValue } from 'recoil';

type QueryKey = {
  query: string;
};

const countOfHighlightedStepsState = selectorFamily<number, QueryKey>({
  key: 'countOfHighlightedSteps',
  get:
    key =>
    ({ get }) => {
      const filteredSteps = data.filter(d => d.includes(key.query));
      return filteredSteps.length;
    },
});

export const useCountOfHighlightedSteps = (key: QueryKey) =>
  useRecoilValue(countOfHighlightedStepsState(key));
