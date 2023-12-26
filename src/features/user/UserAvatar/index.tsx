'use client';

import { Avatar, Button, Flex, Text, useBoolean, useDisclosure, Wrap } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { useAppSelector } from '~store';
import { DropZone, Modal } from '~ui';

export const UserAvatar = () => {
  const param = useParams();

  const avatar = useAppSelector((state) => state.user.user?.avatar);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [flag, setFlag] = useBoolean();

  const handleChange = () => onClose();

  return (
    <Wrap>
      <Flex
        width={300}
        height={400}
        cursor="pointer"
        position="relative"
        mr="15px"
        alignItems="center"
        justifyContent="center"
        onMouseEnter={setFlag.on}
        onMouseLeave={setFlag.off}
      >
        <Avatar
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          _hover={{
            backgroundColor: '#333',
            opacity: '0.3',
          }}
          name="Dan Abrahmov"
          src={`http://localhost:5700/${avatar}`}
          onClick={onOpen}
          borderRadius={8}
        />
        <Text display={flag ? 'block' : 'none'} position="relative" textAlign="center">
          Заменить картинку
        </Text>
      </Flex>

      <Modal
        textTitle="Изменить fdsатар"
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
          <DropZone
            method="PATCH"
            url={`/user/upload-avatar/${param.id}`}
            onChange={handleChange}
          />
        </Flex>
      </Modal>
    </Wrap>
  );
};
