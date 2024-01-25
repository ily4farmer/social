import { Container, Flex } from '@chakra-ui/react';
import { HttpStatusCode } from 'axios';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { serverUsersApi } from '~services/server';
import { TServerApiError } from '~types';

const checkUser = async (id: string) => {
  try {
    await serverUsersApi.checkUser({ id });
  } catch (error) {
    const serverError = error as TServerApiError;
    if (serverError.statusCode === HttpStatusCode.NotFound) {
      return notFound();
    }

    return serverError;
  }
};

export default async function userRoot({
  avatar,
  modal,
  params,
  photos,
  posts,
  userInfo,
}: {
  avatar: ReactNode;
  children: ReactNode;
  modal: ReactNode;
  params: { id: string };
  photos: ReactNode;
  posts: ReactNode;
  userInfo: ReactNode;
}) {
  await checkUser(params.id);

  return (
    <Container>
      <Flex>
        {avatar}
        <Flex flexDirection="column" w="100%">
          {userInfo}
          {photos}
          {posts}
          {modal}
        </Flex>
      </Flex>
    </Container>
  );
}
