export type TUserModel = {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  password: string;
  telegram: string;
};

export type TUserCreateResopnse = {
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  password: string;
  telegram: string;
};

export type TUserCreateRequest = TUserModel;
