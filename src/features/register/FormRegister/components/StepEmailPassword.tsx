import { Link } from '@chakra-ui/next-js';
import { Button, SimpleGrid, useToast } from '@chakra-ui/react';
import { SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { authApi } from '~services/client';
import { FormInput } from '~shared';
import { ApiError, TRegisterShema } from '~types';

import { EStepFormVariants } from '../types';

type StepEmailPasswordProps = {
  setStep: (value: SetStateAction<EStepFormVariants>) => void;
};

export const StepEmailPassword = ({ setStep }: StepEmailPasswordProps) => {
  const {
    clearErrors,
    control,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext<TRegisterShema>();
  const watchEmail = watch('email');

  const toast = useToast();

  const [validate, { isLoading }] = authApi.useLazyValidateEmailQuery();

  const onSubmit = async () => {
    try {
      const isValidForm = await trigger(['email', 'password', 'confirmPassword']);

      if (!isValidForm) {
        return false;
      }
      await validate({ email: watchEmail }).unwrap();
      setStep(EStepFormVariants.UserInfo);
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

  const isErrors = !!Object.keys(errors).length;

  return (
    <>
      <SimpleGrid columns={1} spacing={2}>
        <Controller
          name="email"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.email), isRequired: true }}
              label={{ children: 'Email' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('email'),
                placeholder: 'Введите email',
                type: 'text',
                value: field.value,
              }}
              errorMessage={{
                children: errors.email && errors.email.message,
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.password), isRequired: true }}
              label={{ children: 'Пароль' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('password'),
                placeholder: 'Введите пароль',
                type: 'password',
                value: field.value,
              }}
              errorMessage={{
                children: errors.password && errors.password.message,
              }}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.confirmPassword), isRequired: true }}
              label={{ children: 'Повторите пароль' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('confirmPassword'),
                placeholder: 'Введите пароль',
                type: 'password',
                value: field.value,
              }}
              errorMessage={{
                children: errors.confirmPassword && errors.confirmPassword.message,
              }}
            />
          )}
        />
      </SimpleGrid>
      <Button
        onClick={onSubmit}
        disabled={isErrors}
        w="100%"
        mt="15px"
        type="submit"
        isLoading={isLoading}
      >
        Отправить
      </Button>

      <Link href="/auth" mt={25} textAlign="center" textDecoration="underline">
        Авторизация
      </Link>
    </>
  );
};
