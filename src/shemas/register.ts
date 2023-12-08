import { z } from 'zod';

import { emailSchema, passwordSchema } from './common';

export enum ERegisterGenderVariants {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

export const registerSchema = z
  .object({
    confirmPassword: passwordSchema,
    email: emailSchema,
    firstName: z.string(),
    gender: z.nativeEnum(ERegisterGenderVariants),
    lastName: z.string(),
    middleName: z.string().optional(),
    password: passwordSchema,
    phoneNumber: z.string(),
    telegram: z
      .string()
      .refine((value) => /^@[a-zA-Z0-9_]{5,32}$/.test(value), 'Неправильный адрес'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
