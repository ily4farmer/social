'use server';

import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';

import { serverUsersApi } from '~services/server';

import { Content } from './Content';

export const Avatar = async ({ id }: { id: string }) => {
  const res = await serverUsersApi.getUserAvatar({ id: Number(id) });

  return (
    <Suspense key="userAvatar" fallback={<Loading />}>
      <Content avatar={res.image} />
    </Suspense>
  );
};
