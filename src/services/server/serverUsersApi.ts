import { TUserModel } from '~models';

import { serverRequest } from './serverRequest';

export const serverUsersApi = {
  checkUser: serverRequest<
    { message: string },
    {
      id: number;
    }
  >((data) => ({
    data,
    method: 'POST',
    url: `/user/check-user`,
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
    url: `/user/me`,
  })),
  getUser: serverRequest<TUserModel, { id: number }>((data) => ({
    data,
    method: 'POST',
    url: `/user/get-user`,
  })),
  getUserAvatar: serverRequest<
    {
      id: number;
      image: string;
    },
    { id: number }
  >((data) => ({
    data,
    method: 'POST',
    url: `/user/get-avatar`,
  })),
};
