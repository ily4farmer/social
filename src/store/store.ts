import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import { authApi, listApi, userApi } from '~services/client';

import { listSlice } from './slices/list';
import { userSlice } from './slices/user';

export const reducers = combineReducers({
  [listSlice.name]: listSlice.reducer,
  [listApi.reducerPath]: listApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userSlice.name]: userSlice.reducer,
});

export const makeStore = () =>
  configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: true, serializableCheck: true }).concat(
        listApi.middleware,
        userApi.middleware,
        authApi.middleware,
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
