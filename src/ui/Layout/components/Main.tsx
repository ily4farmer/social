import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => (
  <Flex as="main" role="main" direction="column" flex="1" pt="10px" pb="16px">
    {children}
  </Flex>
);
