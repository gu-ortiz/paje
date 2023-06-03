import HomeList from 'components/HomeList';
import SkeletonSidebar from 'components/SkeletonSidebar';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <Suspense fallback={<SkeletonSidebar />}>
          <div className="w-full h-80 p-4 rounded-md bg-gray-800 shadow-lg overflow-hidden focus:outline-none">
            {/* This is the sidebar */}
          </div>
        </Suspense>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <HomeList />
      </div>
    </div>
  );
}
