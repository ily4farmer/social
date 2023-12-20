import { TUserModel } from '~models';

import { serverRequest } from './serverRequest';

export const serverUsersApi = {
  getMe: serverRequest<unknown, unknown>(() => ({
    method: 'GET',
    url: `/user/me`,
  })),
  getUser: serverRequest<TUserModel, { id: number }>((data) => ({
    data,
    method: 'POST',
    url: `/user/get-user`,
  })),
};
