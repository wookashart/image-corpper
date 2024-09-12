import 'react-loading-skeleton/dist/skeleton.css';

import './globals.css';

import * as React from 'react';

import Navigation from '@/organisms/Navigation/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
