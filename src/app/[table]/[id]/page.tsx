import TermPanel from 'components/TermPanel';

export default async function Page({
  params: { table, id }
}: {
  params: { table: string; id: string };
}) {
  // const data = await getTerm(
  //   `${process.env.NEXT_PUBLIC_API_URL}/${table}/${id}`
  // );

  return (
    <div className="w-full h-fit flex flex-col py-4 sm:py-6 lg:py-8">
      <TermPanel
        term={{
          codigo_tuss: '109238',
          termo: 'Cálculo de la presión de agua',
          tabela: 22,
          dt_inicio_vigencia: '2022-01-01',
          dt_fim_vigencia: '2022-12-31',
          dt_implantacao: '2022-01-01'
        }}
      />
    </div>
  );
}
