import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(8, 'Пароль должен быть не меньше 8 символов')
  .refine((value) => /[A-Z]/.test(value), 'Пароль должен содержать хотя бы одну заглавную букву')
  .refine((value) => /\d/.test(value), 'Пароль должен содержать хотя бы одну цифру');

export const emailSchema = z
  .string()
  .refine(
    (value) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
    'Неправильный email',
  );
