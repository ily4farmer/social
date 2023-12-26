import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import cookie from 'js-cookie';
import { api } from 'services/axiosConfig';

import { ApiError, BaseQueryError } from '~types';

export const axiosBaseQuery: BaseQueryFn<AxiosRequestConfig, unknown, BaseQueryError> = async ({
  headers,
  ...requestConfig
}) => {
  try {
    const token = cookie.get('token');

    const headerConfig = token
      ? {
          Authorization: `Bearer ${token}`,
          ...headers,
        }
      : {
          ...headers,
        };

    const result = await api({
      ...requestConfig,
      headers: headerConfig,
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError<ApiError>;
    return {
      error: {
        message: err.response?.data.errors
          ? err.response?.data.errors.map(({ message }) => message).join(';')
          : err.message,
        status: err.response?.status,
      },
    };
  }
};
