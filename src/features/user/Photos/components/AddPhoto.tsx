'use client';

import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { DropZone, Modal } from '~ui';

export const AddPhoto = () => {
  const param = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button color="#fafafa" mt={2} onClick={onOpen}>
        Загрузить
      </Button>
      <Modal
        textTitle="Добавить фото"
        isOpen={isOpen}
        onClose={onClose}
        modalContent={{
          w: '360px',
        }}
        footer={[
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>,
        ]}
      >
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <DropZone method="POST" url={`/photos/add-photo/${param.id}`} />
        </Flex>
      </Modal>
    </>
  );
};
