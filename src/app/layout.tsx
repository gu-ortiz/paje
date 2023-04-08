import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import 'styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apollo',
  description:
    'Descubra o universo da saúde suplementar com a inteligência e precisão de um deus',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/x-icon' },
    shortcut: { url: '/favicon.ico', type: 'image/x-icon' }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
