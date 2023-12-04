import { Flex } from '@chakra-ui/react';

import { Footer, Header, Main } from './components';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Flex direction="column" flex="1" width="100%" height="100%">
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Flex>
);
