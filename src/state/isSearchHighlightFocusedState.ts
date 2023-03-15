import { data } from '@/data/data';
import { isEmpty, get as _get } from 'lodash';
import { selectorFamily, useRecoilValue } from 'recoil';

import { focusedResultIndexState } from './focusedResultIndexState';
import { queryState } from './queryState';
import { SearchHighlightKey } from '@/types';

/*
 * Is the given step highlighted as the focused Zap Outline search result?
 */
const isSearchHighlightFocusedState = selectorFamily<
  boolean,
  SearchHighlightKey
>({
  key: 'zapOutline/isSearchHighlightFocused',
  get:
    ({ stepId }) =>
    ({ get }) => {
      const familyKey = 'search';

      const query = get(queryState(familyKey));
      const isSearching = !isEmpty(query);

      // If there's no active search query, then the step definitely isn't highlighted
      if (!isSearching) {
        return false;
      }

      const focusedResultIndex = get(focusedResultIndexState(familyKey));
      const index = data.filter(d => d.includes(query)).indexOf(stepId);
      return focusedResultIndex == index;
    },
});

export const useIsFocusedSearchHighlight = (stepId: string) =>
  useRecoilValue(isSearchHighlightFocusedState({ stepId }));
