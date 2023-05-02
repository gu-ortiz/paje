import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <main className="w-full flex-1 flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-800 scrollbar-track-transparent">
      <div className="container h-full flex mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </main>
  );
}
