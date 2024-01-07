import { Flex, Spinner } from '@chakra-ui/react';

const Loading = () => (
  <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
  </Flex>
);

export default Loading;
