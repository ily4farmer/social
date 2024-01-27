'use server';

import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';

import { serverUsersApi } from '~services/server';

import { Aside } from './Aside';

export const Sidebar = async () => {
  const { id } = await serverUsersApi.getMe({});
  return (
    <Suspense key="asideMenu" fallback={<Loading />}>
      <Aside id={id} />
    </Suspense>
  );
};
