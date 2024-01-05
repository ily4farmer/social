export type TPostModel = {
  id: number;
  text: string;
  title: string;
  userId: number;
};

export type TGetAllPostByUserRequest = {
  data: TPostModel[];
  page: number;
  totalCount: number;
  totalPages: number;
};

export type TGetAllPostByUserResponse = {
  page: number;
  size: number;
  userId: number;
};
