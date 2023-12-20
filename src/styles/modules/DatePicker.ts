import { defineStyleConfig } from '@chakra-ui/react';

export const DatePicker = defineStyleConfig({
  // Общие стили для DatePicker
  baseStyle: {
    borderRadius: 'base',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // Значения по умолчанию для размеров и вариантов
  defaultProps: {
    variant: 'outline',
  },

  // Размеры для DatePicker
  sizes: {
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
  },

  // Варианты для DatePicker
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
});
