import { createApi } from '@reduxjs/toolkit/query/react';

import { TAuthLoginRequest, TAuthLoginResponse } from '~models';

import { axiosBaseQuery } from './axiosBaseQuery';

export const authApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    login: builder.query<TAuthLoginResponse, TAuthLoginRequest>({
      query: (data) => ({
        data,
        method: 'POST',
        url: `/auth/login`,
      }),
    }),
  }),
  reducerPath: 'authApi',
});
