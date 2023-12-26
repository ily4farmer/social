import { createApi } from '@reduxjs/toolkit/query/react';

import { TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse } from '~models';

import { axiosBaseQuery } from './axiosBaseQuery';

export const photoApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getAllPhotosByUser: builder.query<TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse>({
      query: (data) => ({
        data,
        method: 'POST',
        url: `/photos/get-photos`,
      }),
    }),
  }),
  reducerPath: 'photoApi',
});
