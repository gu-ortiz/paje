import { getTables } from 'utils/api';

export default async function Page() {
  const data = await getTables(`${process.env.NEXT_PUBLIC_API_URL}/tabelas/`);

  if (data.error) {
    throw new Error(String(data.status));
  }

  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.body.results.map((table) => (
        <div
          key={table.id}
          className="w-full h-24 rounded-md bg-white shadow-md overflow-hidden text-gray-800"
        >
          <div className="w-full flex flex-col px-4 py-4 gap-1 text-sm">
            <span className="text-xs font-bold">
              Tabela {table.codigo_tabela}
            </span>
            <span className="">{table.descricao}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
