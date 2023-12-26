import { ReactNode } from 'react';

export default function userRoot({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <>
      {children} {modal}
    </>
  );
}
