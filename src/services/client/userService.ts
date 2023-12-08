import { createApi } from '@reduxjs/toolkit/query/react';

import { TUserCreateRequest, TUserCreateResopnse } from '~models';

import { axiosBaseQuery } from './axiosBaseQuery';

export const userApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    createUser: builder.mutation<TUserCreateRequest, TUserCreateResopnse>({
      query: (data) => ({
        data,
        method: 'POST',
        url: `/user/create-user`,
      }),
    }),
  }),
  reducerPath: 'userApi',
});
