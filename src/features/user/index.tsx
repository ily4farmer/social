'use client';

import { Container, Flex } from '@chakra-ui/react';

import { TUserModel } from '~models';
import { setUser, useAppDispatch } from '~store';

import { UserAvatar } from './UserAvatar';
import { UserInfo } from './UserInfo';

export const User = ({ data }: { data: TUserModel }) => {
  const dispatch = useAppDispatch();

  dispatch(setUser(data));

  return (
    <Container>
      <Flex>
        <UserAvatar />
        <UserInfo />
      </Flex>
    </Container>
  );
};
