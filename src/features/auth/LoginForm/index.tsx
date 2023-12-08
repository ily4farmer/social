'use client';

import { Button, Flex, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from 'shemas';

import { authApi } from '~services/client';
import { ApiError, TAuthLoginShema } from '~types';

import { Email, Password } from './components';

export const LoginForm = () => {
  const router = useRouter();
  const methods = useForm<TAuthLoginShema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();

  const [login, { isLoading }] = authApi.useLazyLoginQuery();

  const onSubmit: SubmitHandler<TAuthLoginShema> = async (data) => {
    try {
      await login(data).unwrap();

      setTimeout(() => {
        router.push('/profile');
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
          <Email />
          <Password />
          <Button mt="15px" type="submit" isLoading={isLoading}>
            Отправить
          </Button>
        </form>
      </FormProvider>
    </Flex>
  );
};
