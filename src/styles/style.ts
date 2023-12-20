import { extendTheme } from '@chakra-ui/react';

import { styles } from './interface';
import { Heading, Text } from './interface/typography';
import { Button, Card, Container, Input, Modal } from './modules';
import { DatePicker } from './modules/DatePicker';

export const theme = extendTheme({
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
