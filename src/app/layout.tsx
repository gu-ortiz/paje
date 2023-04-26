import Header from 'components/Header';
import { ReactNode } from 'react';
import 'styles/globals.css';

export const metadata = {
  title: 'Pajé',
  description:
    'Descubra o universo da saúde suplementar com a sabedoria de um pajé'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="w-full h-full min-h-screen block">
      <body className="w-full h-full min-h-screen block bg-gray-50 text-zinc-950">
        <div className="w-full h-full min-h-screen flex flex-col">
          <Header />
          <main className="w-full flex-1 flex flex-col overflow-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
