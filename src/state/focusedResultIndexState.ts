import { atomFamily } from 'recoil';

/*
 * The index of the currently focused Zap Outline search result
 */
export const focusedResultIndexState = atomFamily<number, string>({
  key: 'zapOutline/focusedResultIndex',
  default: 0,
});
