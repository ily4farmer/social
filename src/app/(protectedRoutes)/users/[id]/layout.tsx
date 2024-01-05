import { Container, Flex } from '@chakra-ui/react';
import { AxiosError, HttpStatusCode } from 'axios';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { serverUsersApi } from '~services/server';
import { ApiError } from '~types';

const checkUser = async (id: number) => {
  try {
    const { data } = await serverUsersApi.checkUser({ id });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    if (axiosError.response?.status === HttpStatusCode.NotFound) {
      return notFound();
    }

    throw axiosError;
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
  await checkUser(Number(params.id));

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
