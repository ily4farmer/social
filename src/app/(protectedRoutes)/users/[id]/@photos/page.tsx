import Loading from 'app/(protectedRoutes)/loading';
import { Suspense } from 'react';
import { serverPhotoApi } from 'services/server/serverPhotoApi';

import { Photos } from '~features/user';

export default async function PhotosList({ params }: { params: { id: number } }) {
  const { data } = await serverPhotoApi.getAllPhotosByUser({
    page: 1,
    size: 5,
    userId: Number(params.id),
  });

  return (
    <Suspense key="photos" fallback={<Loading />}>
      <Photos photos={data} />
    </Suspense>
  );
}
