import SkeletonList from 'components/SkeletonList';
import SkeletonSidebar from 'components/SkeletonSidebar';

export default function Loading() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <SkeletonSidebar />
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <SkeletonList />
      </div>
    </div>
  );
}
