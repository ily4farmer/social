import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { listAdapter } from '~adapters';

import { stateSelector } from './state';

export const listEntitySelector = listAdapter.getSelectors<RootState>(({ list }) => list);

export const listStateSelector = createDraftSafeSelector(stateSelector, ({ list }) => list);

export const listSearchParamsSelector = createDraftSafeSelector(stateSelector, ({ list }) => ({
  page: list.page,
  size: list.size,
}));
