'use client';

import { Container } from '@chakra-ui/react';

import { LoginForm } from './LoginForm';

export const Auth = () => (
  <Container height="100%" display="flex" justifyContent="center" alignItems="center">
    <LoginForm />
  </Container>
);
