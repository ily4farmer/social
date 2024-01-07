'use client';

import { SimpleGrid } from '@chakra-ui/react';

import { TGetAllPhotosByUserRequest } from '~models';

import { AllPhotoModal } from './AllPhotoModal';
import { PhotoItem } from './PhotoItem';

export const PhotoList = ({ data }: { data: TGetAllPhotosByUserRequest['data'] }) => (
  <SimpleGrid columns={5} spacing={3}>
    {data.map((el, index) =>
      index !== 4 ? (
        <PhotoItem key={el.id} {...el} />
      ) : (
        <AllPhotoModal key={index} defaultPhotos={data} />
      ),
    )}
  </SimpleGrid>
);
