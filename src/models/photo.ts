export type TPhotoModel = {
  id: number;
  image: string;
  userId: number;
};

export type TGetAllPhotosByUserResponse = {
  page: number;
  size: number;
  userId: number;
};

export type TGetAllPhotosByUserRequest = {
  data: {
    id: number;
    image: string;
  }[];
  totalCount: number;
  totalPages: number;
};
