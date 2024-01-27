import { HttpStatusCode } from 'axios';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { serverUsersApi } from '~services/server';
import { TServerApiError } from '~types';

const checkUser = async (id: string) => {
  try {
    await serverUsersApi.checkUser({ id });
  } catch (error) {
    console.log(error);

    const serverError = error as TServerApiError;
    if (serverError.statusCode === HttpStatusCode.NotFound) {
      return notFound();
    }

    return serverError;
  }
};

export default async function userRoot({
  children,
  modal,
  params,
}: {
  children: ReactNode;
  modal: ReactNode;
  params: { id: string };
}) {
  await checkUser(params.id);

  return (
    <>
      {children}
      {modal}
    </>
  );
}
