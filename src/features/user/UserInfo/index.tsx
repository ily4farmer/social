'use client';

import { Card, CardBody, CardHeader, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { isEqual } from 'lodash';

import { useAppSelector } from '~store';
import { formatDateBirthday, formatGender } from '~utils';

export const UserInfo = () => {
  const { dateBirthday, email, fullName, gender, lastName, name, phone, telegram } = useAppSelector(
    ({ user }) => ({
      dateBirthday: user.user?.dateBirthday,
      email: user.user?.email,
      fullName: user.user?.fullName,
      gender: user.user?.gender,
      lastName: user.user?.lastName,
      name: user.user?.firstName,
      phone: user.user?.phoneNumber,
      telegram: user.user?.telegram,
    }),
    isEqual,
  );
  return (
    <Card w="100%" height="fit-content">
      <CardHeader>
        <Heading as="h1">
          {name} {lastName}
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
            <Text>{phone}</Text>
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
