const SkeletonTermLabel = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-20 h-3.5 rounded-md bg-gray-300 animate-pulse" />
      <div className="w-full h-10 rounded-md bg-gray-300 animate-pulse" />
    </div>
  );
};

export default SkeletonTermLabel;
