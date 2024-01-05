import { Spinner } from '@chakra-ui/react';

const Loading = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
    w="100%"
    h="100%"
  />
);

export default Loading;
