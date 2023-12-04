'use client';

import { CloseIcon } from '@chakra-ui/icons';
import { Button, ListItem, Text } from '@chakra-ui/react';

import { TListModel } from '~models';
import { removeListItem, useAppDispatch } from '~store';

type ItemProps = TListModel;

export const Item = ({ id, title }: ItemProps) => {
  const dispatch = useAppDispatch();

  const deleteItemHandler = () => dispatch(removeListItem(id));

  return (
    <ListItem display="flex" width="100%" justifyContent="space-between" alignItems="center">
      <Button variant="outline">Button</Button>
      <Text>{title}</Text>
      <Button onClick={deleteItemHandler}>
        <CloseIcon />
      </Button>
    </ListItem>
  );
};
