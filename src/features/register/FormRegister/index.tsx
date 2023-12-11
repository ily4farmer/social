'use client';

import { Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { ERegisterGenderVariants, registerSchema } from 'shemas';

import { TRegisterShema } from '~types';

import { FormVariant } from './FormVariant';

export const FormRegister = () => {
  const methods = useForm<TRegisterShema>({
    defaultValues: {
      gender: ERegisterGenderVariants.Male,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(registerSchema),
  });

  return (
    <Flex maxW="800px" margin="auto" flexDirection="column">
      <FormProvider {...methods}>
        <FormVariant />
      </FormProvider>
    </Flex>
  );
};
