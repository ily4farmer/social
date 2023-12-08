'use client';

import { Button, Flex, SimpleGrid, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ERegisterGenderVariants, registerSchema } from 'shemas';

import { TUserCreateResopnse } from '~models';
import { userApi } from '~services/client';
import { ApiError, TRegisterShema } from '~types';
import { removeEmptyFields } from '~utils';

import {
  ConfirmPassword,
  Email,
  FirstName,
  Gender,
  LastName,
  MiddleName,
  Password,
  PhoneNumber,
  Telegram,
} from './components';

export const FormRegister = () => {
  const router = useRouter();

  const methods = useForm<TRegisterShema>({
    defaultValues: {
      gender: ERegisterGenderVariants.Male,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(registerSchema),
  });

  const [createUser, { isLoading }] = userApi.useCreateUserMutation();
  const toast = useToast();

  const onSubmit: SubmitHandler<TRegisterShema> = async ({ confirmPassword, ...data }) => {
    try {
      const transformData = removeEmptyFields(data);
      await createUser({ ...transformData } as TUserCreateResopnse).unwrap();

      setTimeout(() => {
        router.push('/auth');
      }, 10000);

      methods.reset();
    } catch (error) {
      const err = error as ApiError;

      toast({
        description: err.message,
        duration: 9000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
        title: 'Произошла ошибка',
      });
    }
  };

  return (
    <Flex maxW="800px" margin="auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SimpleGrid columns={2} spacing={5} mt={4}>
            <Email />
            <Password />
          </SimpleGrid>

          <SimpleGrid columns={2} spacing={5} mt={4}>
            <FirstName />
            <ConfirmPassword />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={5} mt={4}>
            <LastName />
            <MiddleName />
          </SimpleGrid>

          <SimpleGrid columns={2} spacing={5} mt={4}>
            <PhoneNumber />
            <Gender />
          </SimpleGrid>

          <SimpleGrid columns={2} spacing={5} mt={4}>
            <Telegram />
          </SimpleGrid>

          <Button mt="15px" type="submit" isLoading={isLoading}>
            Отправить
          </Button>
        </form>
      </FormProvider>
    </Flex>
  );
};
