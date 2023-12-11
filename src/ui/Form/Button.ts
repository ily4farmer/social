import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: '8px',
    fill: '#333',
    fontWeight: 'bold',
    textTransform: 'uppercase', // <-- border radius is same for all variants and sizes
  },
});
