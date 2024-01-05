import { createApi } from '@reduxjs/toolkit/query/react';

import {
  TAuthLoginRequest,
  TAuthLoginResponse,
  TAuthValidateEmailRequest,
  TAuthValidateEmailResponse,
} from '~models';

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
    logout: builder.query<unknown, unknown>({
      query: () => ({
        method: 'POST',
        url: `/auth/logout`,
      }),
    }),
    validateEmail: builder.query<TAuthValidateEmailRequest, TAuthValidateEmailResponse>({
      query: (data) => ({
        data,
        method: 'POST',
        url: `/auth/validate-email`,
      }),
    }),
  }),
  reducerPath: 'authApi',
});
