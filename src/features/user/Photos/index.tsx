'use server';

import { Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { TGetAllPhotosByUserRequest } from '~models';

import { AddPhotoModal, PhotoList } from './components';

export const Photos = ({ photos }: { photos: TGetAllPhotosByUserRequest }) => (
  <Card w="100%" height="fit-content" mt={3}>
    <CardHeader display="flex" justifyContent="space-between" alignItems="flex-start">
      <Heading as="h1">Фотографии</Heading>
      <AddPhotoModal />
    </CardHeader>
    <CardBody>
      {photos?.data.length !== 0 ? (
        <PhotoList data={photos?.data} />
      ) : (
        <Flex flexDirection="column" alignItems="center">
          <Text>У вас нет картинок</Text>
          <AddPhotoModal />
        </Flex>
      )}
    </CardBody>
  </Card>
);
