import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import { listApi } from '~services/client';

import { listSlice } from './slices/list';

export const reducers = combineReducers({
  [listSlice.name]: listSlice.reducer,
  [listApi.reducerPath]: listApi.reducer,
});

export const makeStore = () =>
  configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: true, serializableCheck: true }).concat(
        listApi.middleware,
      ),
    reducer: reducers,
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
