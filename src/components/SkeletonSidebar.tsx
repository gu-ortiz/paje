const SkeletonSidebar = () => {
  return (
    <div className="w-full h-fit p-4 rounded-md bg-white shadow-lg overflow-hidden">
      <div className="w-full gap-8 grid grid-cols-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="w-20 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            <div className="w-full h-8 rounded-md bg-gray-300 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonSidebar;
