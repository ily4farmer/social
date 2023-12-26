import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Loading from 'app/(protectedRoutes)/loading';
import dynamic from 'next/dynamic';

import { TGetAllPhotosByUserRequest } from '~models';

const DynamicPhotoItem = dynamic(() => import('./PhotoItem').then((m) => m.PhotoItem), {
  loading: () => <Loading />,
});

export const PhotoList = ({
  data,
  onOpen,
}: {
  data: TGetAllPhotosByUserRequest;
  onOpen: () => void;
}) => (
  <SimpleGrid columns={5} spacing={3}>
    {data?.data.map((el, index) =>
      index !== 4 ? (
        <DynamicPhotoItem key={el.id} {...el} />
      ) : (
        <Flex
          h={180}
          alignItems="center"
          justifyContent="center"
          border="1px solid #1C2D50"
          borderRadius="8px"
          cursor="pointer"
          onClick={onOpen}
        >
          <Text>Посмотреть все</Text>
        </Flex>
      ),
    )}
  </SimpleGrid>
);
