import { TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse } from '~models';

import { serverRequest } from './serverRequest';

export const serverPhotoApi = {
  getAllPhotosByUser: serverRequest<TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse>(
    (data) => ({
      body: data,
      method: 'POST',
      urlPath: `/photos/get-photos`,
    }),
  ),
  getPhoto: serverRequest<{ id: number; image: string }, { id: number }>(({ id }) => ({
    method: 'GET',
    urlPath: `/photos/find-one/${id}`,
  })),
};
