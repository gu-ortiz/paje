const LoadingList = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-full px-5 py-3 rounded-md bg-white shadow-lg overflow-hidden"
        >
          <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-[1fr_2fr] 2xl:grid-cols-[1fr_3fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-3.5 rounded-md bg-gray-300 animate-pulse" />
              <div className="w-4/6 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-3.5 rounded-md bg-gray-300 animate-pulse" />
              <div className="w-5/6 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            </div>
            <div className="hidden 2xl:flex flex-col gap-2">
              <div className="w-32 h-3.5 rounded-md bg-gray-300 animate-pulse" />
              <div className="w-1/2 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            </div>
            <div className="hidden 2xl:flex flex-col gap-2">
              <div className="w-32 h-3.5 rounded-md bg-gray-300 animate-pulse" />
              <div className="w-1/2 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            </div>
            <div className="hidden 2xl:flex flex-col gap-2">
              <div className="w-32 h-3.5 rounded-md bg-gray-300 animate-pulse" />
              <div className="w-1/2 h-3.5 rounded-md bg-gray-300 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingList;
