'use server';

import { SimpleGrid } from '@chakra-ui/react';

import { TGetAllPhotosByUserRequest } from '~models';

import { AllPhotoModal } from './AllPhotoModal';
import { PhotoItem } from './PhotoItem';

export const PhotoList = ({ data }: { data: TGetAllPhotosByUserRequest['data'] }) => (
  <SimpleGrid columns={5} spacing={3}>
    {data.slice(0, 4).map((el) => (
      <PhotoItem key={el.id} image={el.image} />
    ))}
    <AllPhotoModal defaultPhotos={data} />
  </SimpleGrid>
);
