const SkeletonCheckbox = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-5 h-5 border rounded-md flex justify-center items-center bg-gray-200 animate-pulse" />
      <div className="w-48 h-3 bg-gray-200 rounded-md animate-pulse" />
    </div>
  );
};

export default SkeletonCheckbox;
