import { TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse } from '~models';

import { serverRequest } from './serverRequest';

export const serverPhotoApi = {
  getAllPhotosByUser: serverRequest<TGetAllPhotosByUserRequest, TGetAllPhotosByUserResponse>(
    (data) => ({
      data,
      method: 'POST',
      url: `/photos/get-photos`,
    }),
  ),
  getPhoto: serverRequest<{ id: number; image: string }, { id: number }>(({ id }) => ({
    method: 'GET',
    url: `photos/find-one/${id}`,
  })),
};
