import { createApi } from '@reduxjs/toolkit/query/react';

import { TListGetItemsRequest, TListGetItemsResponse } from '~models';

import { axiosBaseQuery } from './axiosBaseQuery';

export const listApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getItems: builder.query<TListGetItemsResponse, TListGetItemsRequest>({
      query: (params) => ({
        method: 'GET',
        params,
        url: `/todos`,
      }),
    }),
  }),
  reducerPath: 'listApi',
});
