'use client';
import HomeCard from 'components/HomeCard';
import LoadingList from 'components/LoadingList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TermType } from 'types/term';
import { getTerms } from 'utils/api';

export default function HomeList() {
  const [data, setData] = useState<TermType[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    `http://localhost:3000/api/termos_tuss?page=1`
  );
  const [loading, setLoading] = useState(true);
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
    if (!loading) {
      return;
    }
    const fetchData = async () => {
      const newData = await getTerms(nextPageUrl);
      setData((prevData) => [...prevData, ...newData.results]);
      setNextPageUrl(newData.next);
      setLoading(false);
    };
    fetchData();
  }, [nextPageUrl, loading]);

  return (
    <div className="w-full flex flex-col gap-5">
      {data.map((term, index) => (
        <HomeCard key={index} term={term} />
      ))}
      {nextPageUrl && (
        <div className="w-full h-fit" ref={loader}>
          {loading && <LoadingList />}
        </div>
      )}
    </div>
  );
}
