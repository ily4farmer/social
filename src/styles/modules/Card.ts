import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const baseStyle = definePartsStyle({
  body: {
    padding: '20px',
  },
  borderRadius: '8px',
  // define the part you're going to style
  container: {
    backgroundColor: 'transparent',
    border: '1px solid #1C2D50',
  },
  footer: {
    paddingTop: '2px',
  },
  header: {
    bgColor: '#111F39',
    padding: '16px 20px',
  },
});

export const Card = defineMultiStyleConfig({ baseStyle });
