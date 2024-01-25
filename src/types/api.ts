export type ApiError = {
  errors: {
    code: string;
    message: string;
  }[];
  message: string | string[];
  success: boolean;
};

export type TServerApiError = {
  error?: string;
  message?: unknown;
  statusCode?: number;
};

export type BaseQueryError = {
  message: string;
  status?: number;
};
