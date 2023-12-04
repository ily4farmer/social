import { Button, Flex, List } from '@chakra-ui/react';

import { listEntitySelector } from '~selectors';
import { setListPage, useAppDispatch, useAppSelector } from '~store';

import { Item } from './Item';

export const ListItems = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(listEntitySelector.selectAll);

  const showMore = () => dispatch(setListPage());

  return (
    <Flex flexDirection="column">
      <List spacing={2}>
        {data.map((el) => (
          <Item {...el} />
        ))}
      </List>

      <Button marginTop={10} onClick={showMore}>
        Показать еще
      </Button>
    </Flex>
  );
};
