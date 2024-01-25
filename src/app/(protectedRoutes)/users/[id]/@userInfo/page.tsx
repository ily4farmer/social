import Loading from 'app/(protectedRoutes)/loading';
import { AxiosError } from 'axios';
import { Suspense } from 'react';

import { UserInfo } from '~features/user';
import { serverUsersApi } from '~services/server';
import { ApiError } from '~types';

const getData = async (id: number) => {
  try {
    const res = await serverUsersApi.getUser({ id });
    return res;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;

    throw axiosError;
  }
};

export default async function Info({ params }: { params: { id: number } }) {
  const data = await getData(Number(params.id));

  return (
    <Suspense key="userInfo" fallback={<Loading />}>
      <UserInfo {...data} />
    </Suspense>
  );
}
