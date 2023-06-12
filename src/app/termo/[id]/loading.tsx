import SkeletonTermLabel from 'components/SkeletonTermLabel';

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-10 lg:w-1/2 flex justify-center items-center rounded-t-md bg-white py-3 focus:outline-none">
        <div className="w-20 h-3 rounded-md bg-zinc-300 animate-pulse" />
      </div>
      <div className="w-full h-fit p-4 sm:p-6 lg:p-8 text-white rounded-b-md lg:rounded-tr-md bg-white shadow-md overflow-hidden">
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
          {[...Array(8)].map((_, i) => (
            <SkeletonTermLabel key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
