import { Card, CardBody, CardHeader, Heading, Wrap } from '@chakra-ui/react';

import { TGetAllPostByUserRequest } from '~models/post';

import { AddPost } from './AddPost';

export const Posts = ({ posts }: { posts: TGetAllPostByUserRequest }) => {
  console.log(posts);

  return (
    <Card w="100%" height="fit-content" mt={5}>
      <CardHeader>
        <Heading as="h1">Посты</Heading>
      </CardHeader>
      <CardBody>
        <Wrap>
          <AddPost />
          {/* {posts.data.map((el) => (
            <PostsItem key={el.id} {...el} />
          ))} */}
        </Wrap>
      </CardBody>
    </Card>
  );
};
