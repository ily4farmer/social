import { ReactNode } from 'react';

import { Layout } from '~ui';

export default function protectedRoutes({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
