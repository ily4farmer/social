import { Card, CardBody, CardHeader, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { TGetAllPhotosByUserRequest } from '~models';
import { photoApi } from '~services/client';

import { AddPhoto, AddPhotoModal, AllPhotoModal, PhotoList } from './components';

export const Photos = () => {
  const param = useParams();

  const { data } = photoApi.useGetAllPhotosByUserQuery({
    page: 1,
    size: 5,
    userId: Number(param.id),
  });

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Card w="100%" height="fit-content" mt={3}>
      <CardHeader display="flex" justifyContent="space-between" alignItems="flex-start">
        <Heading as="h1">Фотографии</Heading>
        <AddPhotoModal />
      </CardHeader>
      <CardBody>
        {data?.data.length !== 0 ? (
          <PhotoList data={data as TGetAllPhotosByUserRequest} onOpen={onOpen} />
        ) : (
          <Flex flexDirection="column" alignItems="center">
            <Text>У вас нет картинок</Text>
            <AddPhoto />
          </Flex>
        )}
        <AllPhotoModal isOpen={isOpen} onClose={onClose} />
      </CardBody>
    </Card>
  );
};
