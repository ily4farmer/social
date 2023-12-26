'use server';

import { Image } from '@chakra-ui/react';

async function getPhotoById(photoId: number) {
  const request = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  const data = await request.json();
  return data;
}

export default async function Photo() {
  const photo = await getPhotoById(16);

  return <Image src={photo.url} />;
}
