'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

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

          <DrawerBody display="flex" flexDirection="column">
            <Link href="/friends" textDecor="underline">
              Мой профиль
            </Link>

            <Link href="/friends" textDecor="underline">
              Друзья
            </Link>
          </DrawerBody>

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
