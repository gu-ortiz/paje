import HomeList from 'components/HomeList';

export default async function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <div className="w-full h-80 p-4 rounded-md bg-white shadow-lg overflow-hidden focus:outline-none">
          {/* This is the sidebar */}
        </div>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <HomeList />
      </div>
    </div>
  );
}
