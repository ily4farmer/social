'use client';

import { shallowEqual } from 'react-redux';

import { listSearchParamsSelector } from '~selectors';
import { listApi } from '~services/client';
import { useAppSelector } from '~store';

import { ListItems } from './components';

export const List = () => {
  const { page, size } = useAppSelector(listSearchParamsSelector, shallowEqual);

  listApi.useGetItemsQuery({
    _limit: size,
    _page: page,
  });

  return <ListItems />;
};
