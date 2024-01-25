import { TGetAllPostByUserRequest, TGetAllPostByUserResponse } from '~models/post';

import { serverRequest } from './serverRequest';

export const serverPostApi = {
  getAllPostByUser: serverRequest<TGetAllPostByUserRequest, TGetAllPostByUserResponse>((data) => ({
    body: data,
    method: 'POST',
    urlPath: `/post/get-all`,
  })),
};
