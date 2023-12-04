import { createEntityAdapter } from '@reduxjs/toolkit';

import { TListModel } from '~models';

export const listAdapter = createEntityAdapter<TListModel>();
