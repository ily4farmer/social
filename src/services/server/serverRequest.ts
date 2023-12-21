import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

import { api } from '../axiosConfig';

const getCookies = () => {
  const nextCookies = cookies();
  const allCookies = nextCookies.getAll();
  return allCookies.reduce(
    (accumulator, currentValue) => `${accumulator}${currentValue.name}=${currentValue.value};`,
    '',
  );
};

type TRequestFunction<T> = (params: T) => AxiosRequestConfig;
export const serverRequest =
  <T, D>(requestFunction: TRequestFunction<D>) =>
  (params: D) => {
    const args = requestFunction(params);
    return api({
      ...args,
      headers: {
        Authorization: `Bearer ${cookies().get('token')?.value}`,
        'Content-Type': 'application/json',
        cookie: getCookies(),
      },
    }).then((res) => res as AxiosResponse<T>);
  };
