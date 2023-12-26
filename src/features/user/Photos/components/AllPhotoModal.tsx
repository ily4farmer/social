'use client';

import { Button, SimpleGrid } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/query';
import Loading from 'app/(protectedRoutes)/loading';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { shallowEqual } from 'react-redux';

import { photoApi } from '~services/client';
import { useAppSelector } from '~store';
import { Modal } from '~ui';

type AllPhotoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DynamicPhotoItem = dynamic(() => import('./PhotoItem').then((m) => m.PhotoItem), {
  loading: () => <Loading />,
});

export const AllPhotoModal = ({ isOpen, onClose }: AllPhotoModalProps) => {
  const param = useParams();

  const [page, setPage] = useState<number>(2);

  const photos = useAppSelector((state) => state.user.photos, shallowEqual);

  const { isFetching } = photoApi.useGetAllPhotosByUserQuery(
    isOpen
      ? {
          page,
          size: 5,
          userId: Number(param.id),
        }
      : skipToken,
  );

  const handlePage = () => setPage((prev) => prev + 5);

  return (
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
        <Button isLoading={isFetching} colorScheme="blue" mr={3} onClick={handlePage}>
          Показать еще
        </Button>,
      ]}
    >
      <SimpleGrid columns={5} spacing={3}>
        {photos.map((el) => (
          <DynamicPhotoItem key={el.id} {...el} />
        ))}
      </SimpleGrid>
    </Modal>
  );
};
