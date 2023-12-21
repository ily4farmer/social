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
    getMe: builder.query<unknown, unknown>({
      query: () => ({
        method: 'GET',
        url: `/user/me`,
      }),
    }),
    uploadAvatar: builder.mutation<unknown, { file: FormData; userId: number }>({
      query: ({ file, userId }) => ({
        body: file,
        formData: true,
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        method: 'PATCH',
        url: `/user/upload-avatar/${userId}`,
      }),
    }),
  }),
  reducerPath: 'userApi',
});
