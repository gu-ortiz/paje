import { notFound } from 'next/navigation';

export default async function Page({
  params: { table, id }
}: {
  params: { table: string; id: string };
}) {
  const response = await fetch(`https://api.github.com/repos/${table}/${id}`);

  if (response.status !== 200) notFound();

  const data = await response.json();

  return (
    <div className="w-full h-full flex gap-5">
      Tabela: {table} - Código TUSS: {id}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
