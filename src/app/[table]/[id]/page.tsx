export default function Page({
  params: { table, id }
}: {
  params: { table: string; id: string };
}) {
  return (
    <div className="w-full h-full flex gap-5">
      Tabela: {table} - Código TUSS: {id}
    </div>
  );
}
