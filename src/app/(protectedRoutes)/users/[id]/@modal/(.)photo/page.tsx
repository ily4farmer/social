'use server';

import { serverPhotoApi } from 'services/server/serverPhotoApi';

import { AllPhotos } from '~features/user';

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const res = await serverPhotoApi.getAllPhotosByUser({
    page: 1,
    size: 15,
    userId: Number(params.id),
  });

  return <AllPhotos defaultPhotos={res.data} />;
}
