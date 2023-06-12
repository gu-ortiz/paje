export default function Loading() {
  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-full h-24 rounded-md bg-white shadow-md overflow-hidden"
        >
          <div className="w-full flex flex-col px-4 py-4 gap-1">
            <div className="w-12 h-2.5 rounded-md bg-zinc-300 animate-pulse" />
            <div className="w-4/6 h-2.5 rounded-md bg-zinc-300 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
