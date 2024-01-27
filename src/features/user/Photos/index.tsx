'use server';

import { Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { serverPhotoApi } from 'services/server/serverPhotoApi';

import { AddPhotoModal, PhotoList } from './components';

export const Photos = async ({ id }: { id: string }) => {
  const photos = await serverPhotoApi.getAllPhotosByUser({
    page: 1,
    size: 15,
    userId: Number(id),
  });
  return (
    <Card w="100%" height="fit-content" mt={3}>
      <CardHeader display="flex" justifyContent="space-between" alignItems="flex-start">
        <Heading as="h1">Фотографии</Heading>
        <AddPhotoModal />
      </CardHeader>
      <CardBody>
        {photos?.data.length !== 0 ? (
          <PhotoList userId={id} data={photos?.data} />
        ) : (
          <Flex flexDirection="column" alignItems="center">
            <Text>У вас нет картинок</Text>
            <AddPhotoModal />
          </Flex>
        )}
      </CardBody>
    </Card>
  );
};
