import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    bg: `#111F39`,
    borderRadius: 'md',
  },
  header: {
    borderBottom: '1px solid #1C2D50',
    fontsize: 16,
    padding: '16px 20px',
  },
});

export const Modal = defineMultiStyleConfig({
  baseStyle,
});
