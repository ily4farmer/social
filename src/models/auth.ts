export type TAuthLoginResponse = {
  token: string;
  userId: string;
};

export type TAuthLoginRequest = {
  email: string;
  password: string;
};

export type TAuthValidateEmailResponse = {
  email: string;
};

export type TAuthValidateEmailRequest = {
  message: string;
};
