import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function protectedRoutes({ children }: { children: ReactNode }) {
  return (
    <Flex
      as="main"
      role="main"
      background="#0B1529"
      direction="column"
      py="16"
      w="100%"
      height="100%"
    >
      {children}
    </Flex>
  );
}
