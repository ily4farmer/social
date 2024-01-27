'use server';

import { Card, CardBody, CardHeader, Heading, Wrap } from '@chakra-ui/react';
import { serverPostApi } from 'services/server/serverPostApi';

import { AddPost } from './AddPost';
import { PostsItem } from './PostsItem';

export const Posts = async ({ id }: { id: string }) => {
  const posts = await serverPostApi.getAllPostByUser({
    page: 1,
    size: 15,
    userId: Number(id),
  });
  return (
    <Card w="100%" height="fit-content" mt={5}>
      <CardHeader>
        <Heading as="h1">Посты</Heading>
      </CardHeader>
      <CardBody>
        <Wrap>
          <AddPost />
          {posts.data.map((el) => (
            <PostsItem key={el.id} {...el} />
          ))}
        </Wrap>
      </CardBody>
    </Card>
  );
};
