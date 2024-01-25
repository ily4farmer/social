'use client';

import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react';

import { Modal } from '~ui';

type PhotoItemProps = {
  image: string;
};

export const PhotoItem = ({ image }: PhotoItemProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex flexDirection="column" alignItems="flex-start" cursor="pointer" onClick={onOpen}>
        <Image h={180} src={image} alt="image" borderRadius="8px" />
      </Flex>

      <Modal
        textTitle="Фото"
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
          <Image h={180} src={image} alt="image" borderRadius="8px" crossOrigin="use-credentials" />
        </Flex>
      </Modal>
    </>
  );
};
