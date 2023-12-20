'use client';

import { Flex } from '@chakra-ui/react';

import { Footer, Header, Main, Sidebar } from './components';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Flex direction="column" flex="1" width="100%" height="100%">
    <Header />
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </Flex>
);
