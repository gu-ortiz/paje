import TermPanel from 'components/TermPanel';
import { getTerm } from 'utils/api';

export default async function Page({
  params: { table, id }
}: {
  params: { table: string; id: string };
}) {
  const data = await getTerm(
    `${process.env.NEXT_PUBLIC_API_URL}/termos_tuss/?tabela=${table}&codigo_tuss=${id}`
  );

  return (
    <>
      <TermPanel term={data.results[0]} />
    </>
  );
}
