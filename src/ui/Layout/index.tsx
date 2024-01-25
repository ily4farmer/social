'use server';

import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer, Header, Main, Sidebar } from './components';

export const Layout = async ({ children }: { children: ReactNode }) => (
  <Flex direction="column" flex="1" width="100%" height="100%">
    <Header />
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </Flex>
);
