import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { listAdapter } from '~adapters';
import { listApi } from '~services/client';

type TListState = {
  page: number;
  size: number;
};

const initialState: TListState = {
  page: 1,
  size: 10,
};

export const listSlice = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(listApi.endpoints.getItems.matchFulfilled, (state, { payload }) => {
      listAdapter.addMany(state, payload);
    });
  },
  initialState: listAdapter.getInitialState<TListState>({ ...initialState }),
  name: 'list',
  reducers: {
    removeListItem: (state, action: PayloadAction<number>) => {
      listAdapter.removeOne(state, action.payload);
    },
    setListPage: (state: TListState) => {
      state.page += 1;
    },
  },
});

export const { removeListItem, setListPage } = listSlice.actions;
