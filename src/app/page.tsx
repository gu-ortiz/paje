import Filter from 'components/Filter';
import HomeList from 'components/HomeList';
import SkeletonFilter from 'components/SkeletonFilter';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block self-start py-4 sm:py-6 lg:py-8">
        <div className="w-full h-fit p-4 pb-0 rounded-md bg-white shadow-md focus:outline-none">
          <Suspense fallback={<SkeletonFilter />}>
            <Filter />
          </Suspense>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 py-4 sm:py-6 lg:py-8">
        <HomeList />
      </div>
    </div>
  );
}
