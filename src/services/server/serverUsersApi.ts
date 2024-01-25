import { TUserModel } from '~models';

import { serverRequest } from './serverRequest';

export const serverUsersApi = {
  checkUser: serverRequest<
    { message: string },
    {
      id: string;
    }
  >((body) => ({
    body,
    method: 'POST',
    urlPath: `/user/check-user`,
  })),
  getMe: serverRequest<
    {
      avatar: string;
      email: string;
      firstName: string;
      id: string;
      lastName: string;
    },
    unknown
  >(() => ({
    method: 'GET',
    urlPath: `/user/me`,
  })),
  getUser: serverRequest<TUserModel, { id: number }>((body) => ({
    body,
    method: 'POST',
    urlPath: `/user/get-user`,
  })),
  getUserAvatar: serverRequest<
    {
      id: number;
      image: string;
    },
    { id: number }
  >((body) => ({
    body,
    method: 'POST',
    urlPath: `/user/get-avatar`,
  })),
};
