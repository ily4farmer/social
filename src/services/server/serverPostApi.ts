import { TGetAllPostByUserRequest, TGetAllPostByUserResponse } from '~models/post';

import { serverRequest } from './serverRequest';

export const serverPostApi = {
  getAllPostByUser: serverRequest<TGetAllPostByUserRequest, TGetAllPostByUserResponse>((data) => ({
    data,
    method: 'POST',
    url: `/post/get-all`,
  })),
};
