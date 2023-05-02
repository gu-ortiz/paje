export default function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 hidden sm:block py-4">
        <div className="w-full h-80 flex flex-col p-4 rounded-md bg-white shadow-lg overflow-hidden focus:outline-none">
          {/* This is the sidebar */}
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="w-full h-full flex flex-col gap-5">
          {/* This is the terms list */}
          <div className="w-full h-6 p-4 rounded-md bg-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
