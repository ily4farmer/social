import { extendTheme } from '@chakra-ui/react';

import { styles } from './interface';
import { Heading, Text } from './interface/typography';
import { Button, Card, Container, Input, Modal } from './modules';
import { DatePicker } from './modules/DatePicker';

// These are the default breakpoints
const breakpoints = {
  // ~1280px
  '2xl': '96em',

  base: '0em',

  // ~768px
  lg: '62em',

  // ~480px. em is a relative unit and is dependant on the font-size.
  md: '48em',

  // 0px
  sm: '30em',
  // ~992px
  xl: '80em', // ~1536px
};

export const theme = extendTheme({
  breakpoints,
  components: {
    Button,
    Card,
    Container,
    DatePicker,
    Heading,
    Input,
    Modal,
    Text,
  },
  styles,
});
