'use server';

import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { TGetAllPhotosByUserRequest } from '~models';

import { PhotoItem } from './PhotoItem';

export const PhotoList = ({
  data,
  userId,
}: {
  data: TGetAllPhotosByUserRequest['data'];
  userId: string;
}) => (
  <SimpleGrid columns={5} spacing={3}>
    {data.slice(0, 4).map((el) => (
      <PhotoItem key={el.id} image={el.image} />
    ))}
    <Link href={`/users/${userId}/photo`}>
      <Flex
        h={180}
        alignItems="center"
        justifyContent="center"
        border="1px solid #1C2D50"
        borderRadius="8px"
        cursor="pointer"
      >
        <Text>Посмотреть все</Text>
      </Flex>
    </Link>
  </SimpleGrid>
);
