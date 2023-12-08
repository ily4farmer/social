'use server';

import { Container } from '@chakra-ui/react';

import { FormRegister } from './FormRegister';

export const Register = () => (
  <Container height="100%" display="flex" justifyContent="center" alignItems="center">
    <FormRegister />
  </Container>
);
