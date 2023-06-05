import SkeletonCheckbox from './SkeletonCheckbox';

const SkeletonFilter = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-transparent">
      {[...Array(5)].map((_, i) => (
        <SkeletonCheckbox key={i} />
      ))}
      <div className="w-full h-9 flex justify-center items-center bg-white px-4 py-2">
        <div className="w-6 h-3 bg-gray-200 rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonFilter;
