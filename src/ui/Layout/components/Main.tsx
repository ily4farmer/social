import { Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => (
  <Flex as="main" role="main" background="#e7e0d2" direction="column" flex="1" py="16">
    <Container flex="1">{children}</Container>
  </Flex>
);
