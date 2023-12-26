import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userAdapter } from '~adapters';
import { TUserModel } from '~models';
import { photoApi } from '~services/client';

type TUserState = {
  photos: { id: number; image: string }[];
  user: TUserModel | null;
};

const initialState: TUserState = {
  photos: [],
  user: null,
};

export const userSlice = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(
      photoApi.endpoints.getAllPhotosByUser.matchFulfilled,
      (state, { payload }) => {
        console.log(payload.data);

        state.photos = [...state.photos, ...payload.data];
      },
    );
  },
  initialState: userAdapter.getInitialState<TUserState>({ ...initialState }),
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<TUserModel>) => {
      state.user = action.payload;
      userAdapter.addOne(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
