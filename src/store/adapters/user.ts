import { createEntityAdapter } from '@reduxjs/toolkit';

import { TUserModel } from '~models';

export const userAdapter = createEntityAdapter<TUserModel>();
