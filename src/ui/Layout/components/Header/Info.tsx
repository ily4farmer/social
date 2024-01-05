'use server';

import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';

import { serverUsersApi } from '~services/server';

import { HeaderMenu } from './HeaderMenu';

export const Info = async () => {
  const { data } = await serverUsersApi.getMe({});

  return (
    <Suspense key="headerMenu" fallback={<Loading />}>
      <HeaderMenu {...data} />
    </Suspense>
  );
};
