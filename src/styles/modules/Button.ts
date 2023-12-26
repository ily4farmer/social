import { defineStyleConfig } from '@chakra-ui/react';
import { activeColor } from 'styles/interface';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#fafafa',
    fontWeight: 700,
  },
  defaultProps: {
    size: 'base',
    variant: 'base',
  },
  sizes: {
    base: {
      fontSize: 16,
      padding: ['14px', '16px', '16px', '14px'],
    },
    xs: {
      fontSize: 12,
      padding: '15px 8px',
    },
  },
  variants: {
    base: {
      _active: {
        bg: '#132AAB',
        borderColor: '#132AAB',
      },
      _hover: {
        bg: '#3754F1',
      },
      bg: 'transparent',
      borderColor: '#3754F1',
    },
    primary: {
      _active: {
        bg: '#132AAB',
        borderColor: '#132AAB',
      },
      _hover: {
        bg: '#5B75FF',
        borderColor: '#5B75FF',
      },
      bg: '#3754F1',
      borderColor: '#3754F1',
    },
    secondary: {
      _active: {
        bg: activeColor,
        borderColor: activeColor,
      },
      _hover: {
        bg: '#6077A6',
        borderColor: '#6077A6',
      },
      bg: 'transparent',
      borderColor: '#6077A6',
    },
  },
});
