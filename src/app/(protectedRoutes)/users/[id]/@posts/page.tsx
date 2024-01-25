import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';
import { serverPostApi } from 'services/server/serverPostApi';

import { Posts } from '~features/user';

export default async function UserPosts({ params }: { params: { id: string } }) {
  const res = await serverPostApi.getAllPostByUser({
    page: 1,
    size: 15,
    userId: Number(params.id),
  });

  return (
    <Suspense key="posts" fallback={<Loading />}>
      <Posts posts={res} />
    </Suspense>
  );
}
