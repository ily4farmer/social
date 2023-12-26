import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { DropZone, Modal } from '~ui';

export const AddPhotoModal = () => {
  const param = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleChange = () => onClose();

  return (
    <>
      <Flex alignItems="center" cursor="pointer" onClick={onOpen}>
        <AddIcon mr={2} /> <Text>Добавить фото</Text>
      </Flex>
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
          <DropZone method="POST" url={`/photos/add-photo/${param.id}`} onChange={handleChange} />
        </Flex>
      </Modal>
    </>
  );
};
