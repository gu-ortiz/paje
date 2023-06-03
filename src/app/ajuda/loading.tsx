export default function Loading() {
  return (
    <div className="w-full flex flex-col rounded-2xl bg-white p-2 gap-2">
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          <div className="w-full h-9 flex justify-between items-center rounded-lg bg-gray-300 animate-pulse px-4 py-2" />
        </div>
      ))}
    </div>
  );
}
