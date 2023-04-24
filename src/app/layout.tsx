import { ReactNode } from 'react';
import 'styles/globals.css';

export const metadata = {
  title: 'Apollo',
  description:
    'Descubra o universo da saúde suplementar com a inteligência e precisão de um deus'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="w-full h-full min-h-screen block">
      <body className="w-full h-full min-h-screen block bg-gray-50 text-zinc-950">
        <div className="w-full h-full min-h-screen block">{children}</div>
      </body>
    </html>
  );
}
