import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Chakra, StoreProvider } from '~lib';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Социальная сеть для мудаков',
  title: 'Dolbaebt.net',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Chakra>{children}</Chakra>
        </StoreProvider>
      </body>
    </html>
  );
}
