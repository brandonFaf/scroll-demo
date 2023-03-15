import { atomFamily, useRecoilState, useRecoilValue } from 'recoil';

/*
 * The Zap Outline search query state
 */
export const queryState = atomFamily<string, string>({
  key: 'zapOutline/query',
  default: '',
});

export const useSearchQuery = (familyKey: string) =>
  useRecoilState(queryState(familyKey));

export const useSearchQueryValue = (familyKey: string) =>
  useRecoilValue(queryState(familyKey));
