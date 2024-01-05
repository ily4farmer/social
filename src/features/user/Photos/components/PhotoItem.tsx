'use client';

import { Link } from '@chakra-ui/next-js';
import { Flex, Image } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

type PhotoItemProps = {
  id: number;
  image: string;
};

export const PhotoItem = ({ id, image }: PhotoItemProps) => {
  const param = useParams();

  return (
    <Link href={`/users/${param.id}/photo/${id}`}>
      <Flex flexDirection="column" alignItems="flex-start" cursor="pointer">
        <Image h={180} src={image} alt="image" borderRadius="8px" />
      </Flex>
    </Link>
  );
};
