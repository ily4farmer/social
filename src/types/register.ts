import { registerSchema } from 'shemas';
import { z } from 'zod';

export type TRegisterShema = z.infer<typeof registerSchema>;
