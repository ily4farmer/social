import Loading from 'app/(protectedRoutes)/loading';
import { AxiosError, HttpStatusCode } from 'axios';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { User } from '~features/user';
import { serverUsersApi } from '~services/server';
import { ApiError } from '~types';

const getData = async (id: number) => {
  try {
    const { data } = await serverUsersApi.getUser({ id });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    // ToDo: Проверять централизованно в middleware для любой страницы
    if (axiosError.response?.status === HttpStatusCode.Forbidden) {
      return notFound();
    }

    throw axiosError;
  }
};

const page = async ({ params }: { params: { id: number } }) => {
  const data = await getData(Number(params.id));

  return (
    <Suspense key="userPage" fallback={<Loading />}>
      <User data={data} />
    </Suspense>
  );
};
export default page;
