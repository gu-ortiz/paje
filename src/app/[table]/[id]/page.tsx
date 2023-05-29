import TermPanel from 'components/TermPanel';
import { notFound } from 'next/navigation';

export default async function Page({
  params: { table, id }
}: {
  params: { table: string; id: string };
}) {
  const response = await fetch(`https://api.github.com/repos/${table}/${id}`);

  if (response.status !== 200) notFound();

  // const data = await response.json();

  return (
    <div className="w-full h-fit flex flex-col py-4 sm:py-6 lg:py-8">
      <TermPanel />
    </div>
  );
}