import Header from 'components/Header';
import { ReactNode } from 'react';
import { inter } from 'styles/fonts';
import 'styles/globals.css';

export const metadata = {
  title: 'Pajé',
  description:
    'Descubra o universo da saúde suplementar com a sabedoria de um pajé'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={'w-full h-full min-h-screen block' + inter.className}
    >
      <body className="w-full h-full min-h-screen block bg-zinc-50 text-zinc-950">
        <div className="w-full h-full min-h-screen flex flex-col">
          <Header />
          <main className="w-full flex-1 flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-800 scrollbar-track-transparent">
            <div className="relative container h-full flex mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative w-full h-full flex flex-col justify-center items-center">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
