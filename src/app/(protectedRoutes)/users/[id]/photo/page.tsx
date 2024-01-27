'use server';

import { Flex } from '@chakra-ui/react';
import { serverPhotoApi } from 'services/server/serverPhotoApi';

import { AllPhotos } from '~features/user';

export default async function AboutPage({ params }: { params: { id: string } }) {
  const res = await serverPhotoApi.getAllPhotosByUser({
    page: 1,
    size: 15,
    userId: Number(params.id),
  });

  return (
    <Flex>
      <AllPhotos defaultPhotos={res.data} />
    </Flex>
  );
}
