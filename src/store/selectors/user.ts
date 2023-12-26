import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { userAdapter } from '~adapters';
import { TUserModel } from '~models';

import { stateSelector } from './state';

export const userEntitySelector = userAdapter.getSelectors<RootState>(({ user }) => user);

export const userStateSelector = createDraftSafeSelector(stateSelector, ({ user }) => user);

export const userSelector = (userId: TUserModel['id']) =>
  createDraftSafeSelector(stateSelector, (state) => userEntitySelector.selectById(state, userId));
