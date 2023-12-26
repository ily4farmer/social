import { serverRequest } from './serverRequest';

export const serverPhotoApi = {
  getPhoto: serverRequest<{ id: number; image: string }, { id: number }>(({ id }) => ({
    method: 'GET',
    url: `photos/find-one/${id}`,
  })),
};
