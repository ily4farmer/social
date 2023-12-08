import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => (
  <Flex as="main" role="main" background="#0B1529" direction="column" flex="1" py="16">
    {children}
  </Flex>
);
