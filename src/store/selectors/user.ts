import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { userAdapter } from '~adapters';

import { stateSelector } from './state';

export const userEntitySelector = userAdapter.getSelectors<RootState>(({ user }) => user);

export const userStateSelector = createDraftSafeSelector(stateSelector, ({ user }) => user);
