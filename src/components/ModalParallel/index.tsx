'use client';

import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

import { Modal } from '~ui';

type ModalParallelProps = {
  children: ReactNode;
};

export const ModalParallel = ({ children }: ModalParallelProps) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Modal
      textTitle="Фото"
      isOpen
      onClose={onDismiss}
      modalContent={{
        w: '360px',
      }}
      footer={[
        <Button colorScheme="blue" mr={3} onClick={onDismiss}>
          Close
        </Button>,
      ]}
    >
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </Modal>
  );
};
