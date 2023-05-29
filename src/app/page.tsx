import List from 'components/HomeList';

export default async function Page() {
  const response = await fetch('https://api.github.com/users/gu-ortiz/repos');
  const data = await response.json();

  const terms = data.map(
    (item: {
      id: number;
      full_name: string;
      size: number;
      created_at: string;
      updated_at: string;
      pushed_at: string;
    }) => ({
      codigo_tuss: item.full_name,
      termo: item.full_name,
      tabela: item.size,
      dt_inicio_vigencia: item.updated_at,
      dt_fim_vigencia: item.pushed_at,
      dt_implantacao: item.created_at
    })
  );

  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 sticky top-0 hidden sm:block py-4 self-start">
        <div className="w-full h-80 p-4 rounded-md bg-white shadow-lg overflow-hidden focus:outline-none">
          {/* This is the sidebar */}
        </div>
      </div>
      <div className="flex-1 flex flex-col py-4 gap-5">
        <List terms={terms} />
      </div>
    </div>
  );
}
