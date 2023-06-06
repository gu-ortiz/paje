import Filter from 'components/Filter';
import HomeList from 'components/HomeList';
import SkeletonFilter from 'components/SkeletonFilter';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <div className="w-full h-fit p-4 pb-0 rounded-md bg-white shadow-lg focus:outline-none">
          <Suspense fallback={<SkeletonFilter />}>
            <Filter />
          </Suspense>
        </div>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <HomeList />
      </div>
    </div>
  );
}
