import { serverRequest } from './serverRequest';

export const serverUsersApi = {
  getMe: serverRequest<unknown, unknown>(() => ({
    method: 'GET',
    url: `/user/me`,
  })),
};
