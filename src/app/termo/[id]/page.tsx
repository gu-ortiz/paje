import TermPanel from 'components/TermPanel';
import { getTerm } from 'utils/api';

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  const data = await getTerm(
    `${process.env.NEXT_PUBLIC_API_URL}/termos_tuss/${id}/`
  );

  if (data.error) {
    throw new Error(String(data.status));
  }

  return (
    <>
      <TermPanel term={data.body} />
    </>
  );
}
