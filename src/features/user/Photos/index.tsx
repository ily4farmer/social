import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Loading from 'app/(protectedRoutes)/loading';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

import { photoApi } from '~services/client';

import { AddPhoto, AddPhotoModal, AllPhotoModal } from './components';

const DynamicPhotoItem = dynamic(() => import('./components/PhotoItem').then((m) => m.PhotoItem), {
  loading: () => <Loading />,
});

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
          <SimpleGrid columns={5} spacing={3}>
            {data?.data.map((el, index) => (
              <DynamicPhotoItem
                lenght={data.data.length}
                onOpen={onOpen}
                index={index}
                key={el.id}
                {...el}
              />
            ))}
          </SimpleGrid>
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
