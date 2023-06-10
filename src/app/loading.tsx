import SkeletonFilter from 'components/SkeletonFilter';
import SkeletonList from 'components/SkeletonList';

export default function Loading() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <div className="w-full h-fit p-4 pb-0 rounded-md bg-white shadow-md overflow-hidden focus:outline-none">
          <SkeletonFilter />
        </div>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <SkeletonList />
      </div>
    </div>
  );
}
