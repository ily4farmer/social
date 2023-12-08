'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as Chakra, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        backgroundColor: '#333',
      },
    },

    Container: {
      baseStyle: {
        maxWidth: '1440px',
        padding: '0 20px',
        width: '100%',
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        color: '#fafafa',
      },
    },
  },
});

export function ChakraProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <Chakra theme={theme}>{children}</Chakra>
    </CacheProvider>
  );
}
