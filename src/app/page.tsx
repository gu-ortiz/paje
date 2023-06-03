import Filter from 'components/Filter';
import HomeList from 'components/HomeList';
import SkeletonSidebar from 'components/SkeletonSidebar';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <Suspense fallback={<SkeletonSidebar />}>
          <div className="w-full h-fit p-4 pb-0 rounded-md bg-white shadow-lg overflow-hidden focus:outline-none">
            <Filter />
          </div>
        </Suspense>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <HomeList />
      </div>
    </div>
  );
}
