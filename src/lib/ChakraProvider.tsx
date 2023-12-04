'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Chakra } from '@chakra-ui/react';

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Chakra>{children}</Chakra>
    </CacheProvider>
  );
}
