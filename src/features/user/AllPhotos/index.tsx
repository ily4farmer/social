'use client';

import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import Loading from 'app/(protectedRoutes)/loading';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { TGetAllPhotosByUserRequest } from '~models';
import { photoApi } from '~services/client';
import { Modal } from '~ui';

const DynamicPhotoItem = dynamic(
  () => import('../Photos/components/PhotoItem').then((m) => m.PhotoItem),
  {
    loading: () => <Loading />,
  },
);

export const AllPhotos = ({
  defaultPhotos,
}: {
  defaultPhotos: TGetAllPhotosByUserRequest['data'];
}) => {
  const router = useRouter();
  const param = useParams();

  const [listPhotos, setListPhotos] = useState<TGetAllPhotosByUserRequest['data']>([
    ...defaultPhotos,
  ]);

  const [page, setPage] = useState<number>(2);

  const { data, isFetching } = photoApi.useGetAllPhotosByUserQuery({
    page,
    size: 15,
    userId: Number(param.id),
  });

  useEffect(() => {
    if (data?.data && data?.data.length !== 0) {
      setListPhotos((prev) => prev.concat(data?.data));
    }
  }, [data?.data]);

  const handlePage = () => setPage((prev) => prev + 1);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Modal
      textTitle="Фото"
      isOpen
      onClose={onDismiss}
      modalContent={{
        maxW: '1200px',
        w: '100%',
      }}
      footer={[
        <Button colorScheme="blue" mr={3} onClick={onDismiss}>
          Close
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
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <SimpleGrid columns={5} spacing={3}>
          {listPhotos.map((el, index) => (
            <DynamicPhotoItem key={index} {...el} />
          ))}
        </SimpleGrid>
      </Flex>
    </Modal>
  );
};
