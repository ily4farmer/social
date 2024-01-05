import { Box, Container } from '@chakra-ui/react';

import { Text } from '~ui/Chakra';

import { Info } from './Info';

export const Header = () => (
  <Box as="nav" role="navigation" bg="#101E36" py={5}>
    <Container display="flex" justifyContent="space-between">
      <Text size="xl">Dolbaeb.net</Text>
      <Info />
    </Container>
  </Box>
);
