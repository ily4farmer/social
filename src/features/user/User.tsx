import { Container, Flex } from '@chakra-ui/react';

import { Avatar } from './Avatar';
import { Photos } from './Photos';
import { Posts } from './Posts';
import { UserInfo } from './UserInfo';

export const User = ({ id }: { id: string }) => (
  <Container>
    <Flex>
      <Avatar id={id} />
      <Flex flexDirection="column" w="100%">
        <UserInfo id={id} />
        <Photos id={id} />
        <Posts id={id} />
      </Flex>
    </Flex>
  </Container>
);
