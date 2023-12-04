import { Box, BoxProps, Container, Text } from '@chakra-ui/react';

export const Footer = (props: BoxProps) => (
  <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
    <Container>
      <Text minH="20">Footer</Text>
    </Container>
  </Box>
);
