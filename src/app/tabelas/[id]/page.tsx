import TablesList from 'components/TablesList';

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="flex-1 flex flex-col gap-5 py-4 sm:py-6 lg:py-8">
        <TablesList id={id} />
      </div>
    </div>
  );
}
