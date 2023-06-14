import TermPanel from 'components/TermPanel';
import { getTerm } from 'utils/api';

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  const dataTerm = await getTerm(
    `${process.env.NEXT_PUBLIC_API_URL}/termos_tuss/${id}`
  );

  if (dataTerm.error) {
    throw new Error(String(dataTerm.status));
  }

  return (
    <>
      <TermPanel id={id} term={dataTerm.body} />
    </>
  );
}
