'use client';

import { MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { authApi } from '~services/client';

export const Logout = () => {
  const router = useRouter();
  const [logout] = authApi.useLazyLogoutQuery({});

  const logoutUser = async () => {
    try {
      await logout({});
      router.push('/auth');
    } catch (error) {
      return error;
    }
  };

  return (
    <MenuItem onClick={logoutUser} bgColor="#111F39">
      Выход
    </MenuItem>
  );
};
