'use server';

import { Image } from '@chakra-ui/react';
import { serverPhotoApi } from 'services/server/serverPhotoApi';

import { ModalParallel } from '~components/ModalParallel';

export default async function PhotoModal({ params }: { params: { imageId: string } }) {
  const res = await serverPhotoApi.getPhoto({ id: Number(params.imageId) });

  return (
    <ModalParallel>
      <Image src={res.image} />
    </ModalParallel>
  );
}
