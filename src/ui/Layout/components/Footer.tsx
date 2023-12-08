import { Box, BoxProps, Container, Text } from '@chakra-ui/react';

export const Footer = (props: BoxProps) => (
  <Box as="footer" role="contentinfo" bg="#101E36" {...props}>
    <Container width="100%">
      <Text minH="20">Footer</Text>
    </Container>
  </Box>
);
