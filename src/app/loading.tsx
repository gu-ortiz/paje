export default function Loading() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
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
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <div className="w-full flex flex-col gap-5">
          {[...Array(8)].map((_, i) => (
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
      </div>
    </div>
  );
}
