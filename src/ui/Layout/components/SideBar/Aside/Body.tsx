import { Link } from '@chakra-ui/next-js';
import { DrawerBody } from '@chakra-ui/react';

export const Body = ({ id }: { id: string }) => (
  <DrawerBody display="flex" flexDirection="column">
    <Link href={`/users/${id}`} textDecor="underline" textUnderlineOffset={2}>
      Мой профиль
    </Link>

    <Link href={`/users/${id}/photo`} textDecor="underline" textUnderlineOffset={2}>
      Мои фотографии
    </Link>
  </DrawerBody>
);
