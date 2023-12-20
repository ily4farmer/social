export type TUserModel = {
  avatar: null | string;
  dateBirthday: string;
  email: string;
  firstName: string;
  fullName: string;
  gender: string;
  id: number;
  lastName: string;
  middleName: string;
  password: string;
  phoneNumber: string;
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
