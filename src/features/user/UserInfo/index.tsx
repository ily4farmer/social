'use server';

import { Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import { serverUsersApi } from '~services/server';
import { ApiError } from '~types';
import { formatDateBirthday, formatGender } from '~utils';

const getData = async (id: number) => {
  try {
    const res = await serverUsersApi.getUser({ id });
    return res;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;

    throw axiosError;
  }
};

export const UserInfo = async ({ id }: { id: string }) => {
  const { dateBirthday, email, firstName, fullName, gender, lastName, phoneNumber, telegram } =
    await getData(Number(id));
  return (
    <Card w="100%" height="fit-content">
      <CardHeader>
        <Heading as="h1">
          {firstName} {lastName}
        </Heading>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={3} spacing={10}>
          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              Полное имя
            </Heading>
            <Text>{fullName}</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              Email
            </Heading>
            <Text>{email}</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              Телефон
            </Heading>
            <Text>{phoneNumber}</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              Telegram
            </Heading>
            <Text>{telegram}</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              День рождения
            </Heading>
            <Text>{formatDateBirthday(dateBirthday as string)}</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start">
            <Heading as="h3" variant="secondary">
              Пол
            </Heading>
            <Text>{formatGender(gender as string)}</Text>
          </Flex>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
