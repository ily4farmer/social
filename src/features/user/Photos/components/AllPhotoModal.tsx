'use client';

import { Button, Flex, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import Loading from 'app/(protectedRoutes)/loading';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { TGetAllPhotosByUserRequest } from '~models';
import { photoApi } from '~services/client';
import { Modal } from '~ui';

const DynamicPhotoItem = dynamic(() => import('./PhotoItem').then((m) => m.PhotoItem), {
  loading: () => <Loading />,
});

export const AllPhotoModal = ({
  defaultPhotos,
}: {
  defaultPhotos: TGetAllPhotosByUserRequest['data'];
}) => {
  const param = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [listPhotos, setListPhotos] = useState<TGetAllPhotosByUserRequest['data']>([
    ...defaultPhotos,
  ]);

  const [page, setPage] = useState<number>(2);

  const { data, isFetching } = photoApi.useGetAllPhotosByUserQuery({
    page,
    size: 5,
    userId: Number(param.id),
  });

  useEffect(() => {
    if (data?.data && data?.data.length !== 0) {
      setListPhotos((prev) => prev.concat(data?.data));
    }
  }, [data?.data]);

  const handlePage = () => setPage((prev) => prev + 1);

  return (
    <>
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
      <Modal
        textTitle="Все фотографии"
        isOpen={isOpen}
        onClose={onClose}
        modalContent={{
          maxW: '1200px',
          w: '100%',
        }}
        footer={[
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Загрыть
          </Button>,
          <Button
            isLoading={isFetching}
            display={data?.totalPages === page ? 'none' : 'block'}
            colorScheme="blue"
            mr={3}
            onClick={handlePage}
          >
            Показать еще
          </Button>,
        ]}
      >
        <SimpleGrid columns={5} spacing={3}>
          {listPhotos.map((el) => (
            <DynamicPhotoItem key={el.id} {...el} />
          ))}
        </SimpleGrid>
      </Modal>
    </>
  );
};
