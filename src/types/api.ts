export type ApiError = {
  errors: {
    code: string;
    message: string;
  }[];
  message: string | string[];
  success: boolean;
};

export type BaseQueryError = {
  message: string;
  status?: number;
};
