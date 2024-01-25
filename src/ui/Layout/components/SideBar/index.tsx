'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { Body } from './Body';

export const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Container pt="10px">
      <HamburgerIcon ref={btnRef} onClick={onOpen} cursor="pointer" w={10} h={10} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bgColor="#111F39">
          <DrawerCloseButton />
          <DrawerHeader color="#fafafa">Меню</DrawerHeader>

          <Body />

          <DrawerFooter>
            <Button variant="secondary" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};
