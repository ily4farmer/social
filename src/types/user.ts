import { userCreatePostSchema } from 'shemas';
import { z } from 'zod';

export type TUserCreatePostSchema = z.infer<typeof userCreatePostSchema>;
