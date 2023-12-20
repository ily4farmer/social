import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userAdapter } from '~adapters';
import { TUserModel } from '~models';

type TUserState = {
  user: TUserModel | null;
};

const initialState: TUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState: userAdapter.getInitialState<TUserState>({ ...initialState }),
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<TUserModel>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
