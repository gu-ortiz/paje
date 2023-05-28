import { ReactNode } from 'react';

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full flex-1 flex flex-col overflow-auto sm:scrollbar-thin sm:scrollbar-thumb-rounded-full sm:scrollbar-thumb-gray-800 sm:scrollbar-track-transparent">
      <div className="container h-fit flex mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Page;
