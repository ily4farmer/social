import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';

import { UserAvatar } from '~features/user';
import { serverUsersApi } from '~services/server';

const Avatar = async ({ params }: { params: { id: number } }) => {
  const { data } = await serverUsersApi.getUserAvatar({ id: Number(params.id) });

  return (
    <Suspense key="userAvatar" fallback={<Loading />}>
      <UserAvatar avatar={data.image} />
    </Suspense>
  );
};

export default Avatar;
