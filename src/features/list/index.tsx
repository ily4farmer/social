'use client';

import { Container } from '@chakra-ui/react';
import { shallowEqual } from 'react-redux';

import { listSearchParamsSelector } from '~selectors';
import { listApi } from '~services/client';
import { FormInput } from '~shared';
import { useAppSelector } from '~store';

export const List = () => {
  const { page, size } = useAppSelector(listSearchParamsSelector, shallowEqual);

  listApi.useGetItemsQuery({
    _limit: size,
    _page: page,
  });

  return (
    <Container>
      <FormInput
        label={{ children: 'fdsfds' }}
        control={{ isInvalid: true, isRequired: true }}
        input={{ value: '' }}
      />
    </Container>
  );
};
