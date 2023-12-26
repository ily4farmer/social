'use client';

import { Container, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { TUserModel } from '~models';
import { setUser, useAppDispatch } from '~store';

import { Photos } from './Photos';
import { UserAvatar } from './UserAvatar';
import { UserInfo } from './UserInfo';

export const User = ({ data }: { data: TUserModel }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUser(data));
  }, []);

  return (
    <Container>
      <Flex>
        <UserAvatar />
        <Flex flexDirection="column" w="100%">
          <UserInfo />
          <Photos />
        </Flex>
      </Flex>
    </Container>
  );
};
