import { Heading, Text, WrapItem } from '@chakra-ui/react';

type PostsItemProps = {
  id: number;
  text: string;
  title: string;
};

export const PostsItem = ({ id, text, title }: PostsItemProps) => (
  <WrapItem
    key={id}
    w="100%"
    display="flex"
    flexDirection="column"
    flexWrap="nowrap"
    border="1px solid #1C2D50"
    borderRadius={8}
    py={4}
    px={3}
  >
    <Heading as="h3">{title}</Heading>
    <Text pt={2}>{text}</Text>
  </WrapItem>
);
