import { extendTheme } from '@chakra-ui/react';

import { styles } from './interface';
import { Button, Container, Input } from './modules';

export const theme = extendTheme({
  components: {
    Button,
    Container,
    Input,
  },
  styles,
});
