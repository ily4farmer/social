import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brand',
    size: 'xl',
  },
  variants: {
    secondary: {
      color: '#6077A6',
      fontWeight: 400,
    },
  },
});

export const Text = defineStyleConfig({
  defaultProps: {
    size: 'base',
    variant: 'base',
  },
  sizes: {
    base: {
      fontSize: '14px',
    },
  },
  variants: {
    base: {
      color: '#fafafa',
    },
    secondary: {
      color: '#6077A6',
    },
  },
});
