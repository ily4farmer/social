import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from 'services/axiosConfig';

import { ApiError, BaseQueryError } from '~types';

export const axiosBaseQuery: BaseQueryFn<AxiosRequestConfig, unknown, BaseQueryError> = async (
  requestConfig,
) => {
  try {
    const result = await api({
      ...requestConfig,
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError<ApiError>;
    return {
      error: {
        message: err.response?.data.errors.map(({ message }) => message).join(';') || err.message,
        status: err.response?.status,
      },
    };
  }
};
