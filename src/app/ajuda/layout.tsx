import { ReactNode } from 'react';

export const metadata = {
  title: 'Ajuda',
  description:
    'Descubra o universo da saúde suplementar com a sabedoria de um pajé'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-fit flex flex-col py-4 sm:py-6 lg:py-8">
      {children}
    </div>
  );
}
