import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { activeColor, errorColor } from 'styles/interface';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const base = definePartsStyle({
  field: {
    '&:not(:placeholder-shown)': {
      borderColor: activeColor,
    },
    _active: {
      borderColor: activeColor,
    },
    _focus: {
      borderColor: activeColor,
    },
    _invalid: {
      borderColor: errorColor,
    },
    _placeholder: {
      color: '#40567B',
      fontWeight: 400,
    },
    bg: 'transparent',
    borderColor: '#213358',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: '1px',
    fontSize: 16,
    fontWeight: 400,
  },
});

export const Input = defineMultiStyleConfig({
  defaultProps: {
    size: 'base',
    variant: 'base',
  },
  sizes: {
    base: {
      field: {
        padding: '12px 16px',
      },
    },
    xs: {
      field: {
        padding: '7px 16px',
      },
    },
  },
  variants: {
    base,
  },
});
