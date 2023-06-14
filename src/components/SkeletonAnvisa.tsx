const SkeletonAnvisa = () => {
  return (
    <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="w-full flex flex-col gap-2">
          <div className="w-20 h-3.5 my-[3px] rounded-md bg-white animate-pulse" />
          <div className="w-full h-10 rounded-md bg-white animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonAnvisa;
