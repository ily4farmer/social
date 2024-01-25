import { Link } from '@chakra-ui/next-js';
import { DrawerBody } from '@chakra-ui/react';

const routes = [
  { href: '/users', text: 'Мой профиль' },
  { href: '/friends', text: 'Мои фотографии' },
  { href: '/friends', text: 'Друзья' },
  { href: '/friends', text: 'Чаты' },
];

export const Body = () => (
  <DrawerBody display="flex" flexDirection="column">
    {routes.map((el) => (
      <Link key={el.text} href={el.href} textDecor="underline" textUnderlineOffset={2}>
        {el.text}
      </Link>
    ))}
  </DrawerBody>
);
