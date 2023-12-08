import { loginSchema } from 'shemas';
import { z } from 'zod';

export type TAuthLoginShema = z.infer<typeof loginSchema>;
