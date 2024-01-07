'use client';

import { Box, Button, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { addPost } from 'app/actions';
import { useParams } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { userCreatePostSchema } from 'shemas';

import { FormInput } from '~shared';
import { ApiError } from '~types';
import { TUserCreatePostSchema } from '~types/user';

export const AddPost = () => {
  const param = useParams();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TUserCreatePostSchema>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(userCreatePostSchema),
  });
  const toast = useToast();

  const onSubmit: SubmitHandler<TUserCreatePostSchema> = async (data) => {
    try {
      const res = await addPost({ ...data, userId: Number(param.id as string) });

      console.log(res);
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
    <Box as="form" w="100%" onSubmit={handleSubmit(onSubmit)} pb={5}>
      <Controller
        name="title"
        control={control}
        render={({ field: { ref, ...field } }) => (
          <FormInput
            {...field}
            control={{ isInvalid: Boolean(errors.title) }}
            label={{ children: 'Добавить пост' }}
            input={{
              onChange: field.onChange,
              onFocus: () => clearErrors('title'),
              placeholder: 'Заголовок поста',
              type: 'textaria',
              value: field.value,
            }}
            errorMessage={{
              children: errors.title && errors.title.message,
            }}
          />
        )}
      />

      <Controller
        name="text"
        control={control}
        render={({ field: { ref, ...field } }) => (
          <FormInput
            {...field}
            control={{ isInvalid: Boolean(errors.text) }}
            label={{ children: '' }}
            input={{
              as: 'textarea',
              onChange: field.onChange,
              onFocus: () => clearErrors('text'),
              placeholder: 'Текст поста',
              resize: 'vertical',
              type: 'textaria',
              value: field.value,
            }}
            errorMessage={{
              children: errors.text && errors.text.message,
            }}
          />
        )}
      />

      <Button type="submit">Добавить</Button>
    </Box>
  );
};
