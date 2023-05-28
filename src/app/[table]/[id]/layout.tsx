import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: params.id,
    description:
      'Descubra o universo da saúde suplementar com a sabedoria de um pajé'
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
