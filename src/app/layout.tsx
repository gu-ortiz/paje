import Header from 'components/Header';
import Page from 'components/Page';
import { SearchProvider } from 'context/Search';
import { ReactNode } from 'react';
import { inter } from 'styles/fonts';
import 'styles/globals.css';

export const metadata = {
  title: {
    default: 'Pajé',
    template: '%s | Pajé'
  },
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
          <SearchProvider>
            <Header />
            <Page>{children}</Page>
          </SearchProvider>
        </div>
      </body>
    </html>
  );
}
