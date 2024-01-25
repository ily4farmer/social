'use server';

import { Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { Logout } from './Logout';

type HeaderMenuProps = {
  avatar: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

export const HeaderMenu = ({ avatar, email, firstName, id, lastName }: HeaderMenuProps) => (
  <Menu isLazy>
    <MenuButton>
      <Flex>
        <Image
          objectFit="cover"
          w={50}
          h={50}
          borderRadius="50%"
          src={avatar}
          alt="avatar"
          mr={4}
        />
        <Flex flexDirection="column">
          <Text textAlign="left">{email}</Text>
          <Text pt={1} textAlign="left">
            {firstName} {lastName}
          </Text>
        </Flex>
      </Flex>
    </MenuButton>
    <MenuList bgColor="#111F39" borderColor="#1C2D50">
      <MenuItem bgColor="#111F39">
        <Link href={`/users/${id}`}>Мой профиль</Link>
      </MenuItem>
      <Logout />
    </MenuList>
  </Menu>
);
