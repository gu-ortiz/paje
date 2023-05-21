import List from 'components/HomeList';

export default function Page() {
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-64 hidden sm:block py-4">
        <div className="w-full h-80 flex flex-col p-4 rounded-md bg-white shadow-lg overflow-hidden focus:outline-none">
          {/* This is the sidebar */}
        </div>
      </div>
      <div className="flex-1 py-4">
        <List
          terms={[
            {
              codigo_tuss: 12345,
              termo: 'Example Term',
              tabela: '20',
              dt_inicio_vigencia: '2023-01-01',
              dt_fim_vigencia: '2023-12-31',
              dt_implantacao: '2023-01-01'
            },
            {
              codigo_tuss: 12345,
              termo: 'Example Term',
              tabela: '22',
              dt_inicio_vigencia: '2023-01-01',
              dt_fim_vigencia: '2023-12-31',
              dt_implantacao: '2023-01-01'
            },
            {
              codigo_tuss: 12345,
              termo: 'Example Term',
              tabela: '18',
              dt_inicio_vigencia: '2023-01-01',
              dt_fim_vigencia: '2023-12-31',
              dt_implantacao: '2023-01-01'
            }
          ]}
        />
      </div>
    </div>
  );
}
