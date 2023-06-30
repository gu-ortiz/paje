'use client';
import HomeCard from 'components/HomeCard';
import SkeletonList from 'components/SkeletonList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TermType } from 'types/tuss';
import { getTerms } from 'utils/api';
import { getTableParam, isValidURL } from 'utils/url';

const TableList = ({ id }: { id: string }) => {
  const [data, setData] = useState<TermType[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    `${process.env.NEXT_PUBLIC_API_URL}/termos_tuss/?page=1${getTableParam(id)}`
  );
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({
    status: 200,
    statusText: '',
    error: false
  });
  const loader = useRef(null);

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];
      if (target.isIntersecting && nextPageUrl) {
        setLoading(true);
      }
    },
    [nextPageUrl]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    const currentLoader = loader.current;

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    const fetchData = async () => {
      if (isValidURL(nextPageUrl) && loading && !status.error) {
        const response = await getTerms(nextPageUrl);

        setStatus({
          status: response.status,
          statusText: response.statusText,
          error: response.error
        });
        setData((prevData) => [...prevData, ...response.body.results]);
        setNextPageUrl(response.body.next || '');
        setLoading(false);
      }
    };

    fetchData();
  }, [nextPageUrl, loading, status.error]);

  useEffect(() => {
    if (status.error) {
      throw new Error(String(status.status));
    }
  }, [status.error, status.status]);

  return (
    <ul className="w-full flex flex-col gap-5">
      {!loading && data.length <= 0 ? (
        <li className="w-full text-xl text-center text-zinc-300">
          Nenhum termo encontrado.
        </li>
      ) : (
        data.map((term, index) => <HomeCard key={index} term={term} />)
      )}
      {nextPageUrl && (
        <li className="w-full h-fit" ref={loader}>
          {loading && <SkeletonList />}
        </li>
      )}
    </ul>
  );
};

export default TableList;
