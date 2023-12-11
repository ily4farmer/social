'use client';

import { Box, Container, Text } from '@chakra-ui/react';

import { userApi } from '~services/client';

export const Header = () => {
  const { data } = userApi.useGetMeQuery({});

  console.log(data);

  return (
    <Box as="nav" role="navigation" bg="#101E36">
      <Container>
        <Text minH="20">Navigation</Text>
      </Container>
    </Box>
  );
};
