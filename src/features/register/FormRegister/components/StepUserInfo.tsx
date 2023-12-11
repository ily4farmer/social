import { Button, Flex, Radio, SimpleGrid, Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, SetStateAction } from 'react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';

import { userApi } from '~services/client';
import { FormInput, FormRadioGroup } from '~shared';
import { ApiError, TRegisterShema } from '~types';

import { EStepFormVariants } from '../types';

type StepEmailPasswordProps = {
  setStep: (value: SetStateAction<EStepFormVariants>) => void;
};

export const StepUserInfo = ({ setStep }: StepEmailPasswordProps) => {
  const router = useRouter();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useFormContext<TRegisterShema>();

  const [createUser, { isLoading }] = userApi.useCreateUserMutation();
  const toast = useToast();

  const onSubmit: SubmitHandler<TRegisterShema> = async ({ confirmPassword, ...data }) => {
    try {
      await createUser(data).unwrap();

      router.push('/auth');
      setStep(EStepFormVariants.UserInfo);

      reset();
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

  const telegramHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue('telegram', value);

    if (value.length !== 0 && value[0] !== '@') {
      setValue('telegram', `@${value}`);
    }
  };

  const isErrors = !!Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacing={4}>
        <Controller
          name="firstName"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.firstName) }}
              label={{ children: 'Имя' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('firstName'),
                placeholder: 'Введите имя',
                type: 'text',
                value: field.value,
              }}
              errorMessage={{
                children: errors.firstName && errors.firstName.message,
              }}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.lastName) }}
              label={{ children: 'Фамилия' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('lastName'),
                placeholder: 'Введите фамилию',
                type: 'password',
                value: field.value,
              }}
              errorMessage={{
                children: errors.lastName && errors.lastName.message,
              }}
            />
          )}
        />

        <Controller
          name="middleName"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.middleName) }}
              label={{ children: 'Отчество' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('middleName'),
                placeholder: 'Введите отчество',
                type: 'password',
                value: field.value,
              }}
              errorMessage={{
                children: errors.middleName && errors.middleName.message,
              }}
            />
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormRadioGroup
              {...field}
              label={{ children: 'Пол' }}
              radioGroup={{
                children: (
                  <Stack direction="row">
                    <Radio value="male">Муж</Radio>
                    <Radio value="female">Жен</Radio>
                    <Radio value="other">Другое</Radio>
                  </Stack>
                ),
                onChange: field.onChange,
                value: field.value,
              }}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.phoneNumber) }}
              label={{ children: 'Телефон' }}
              input={{
                onChange: field.onChange,
                onFocus: () => clearErrors('phoneNumber'),
                placeholder: 'Введите телефон',
                type: 'text',
                value: field.value,
              }}
              errorMessage={{
                children: errors.phoneNumber && errors.phoneNumber.message,
              }}
            />
          )}
        />

        <Controller
          name="telegram"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <FormInput
              {...field}
              control={{ isInvalid: Boolean(errors.telegram) }}
              label={{ children: 'Telegram' }}
              input={{
                onChange: telegramHandler,
                onFocus: () => clearErrors('telegram'),
                placeholder: 'Введите telegram',
                type: 'text',
                value: field.value,
              }}
              errorMessage={{
                children: errors.telegram && errors.telegram.message,
              }}
            />
          )}
        />
      </SimpleGrid>
      <Flex justifyContent="center">
        <Button minW="200px" mt="15px" type="submit" disabled={isErrors} isLoading={isLoading}>
          Отправить
        </Button>
      </Flex>
    </form>
  );
};
