'use client';
import HomeCard from 'components/HomeCard';
import SkeletonList from 'components/SkeletonList';
import { SearchContext } from 'context/Search';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TermType } from 'types/term';
import { getTerms } from 'utils/api';
import { getSearchParam, getTablesParam } from 'utils/params';

const HomeList = () => {
  const { searchText, filterTables } = useContext(SearchContext);
  const [data, setData] = useState<TermType[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
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
    setData([]);
    setNextPageUrl(
      `${process.env.NEXT_PUBLIC_API_URL}/search/?page=1${getTablesParam(
        filterTables
      )}${getSearchParam(searchText)}`
    );
  }, [searchText, filterTables]);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const fetchData = async () => {
      const newData = await getTerms(nextPageUrl);
      if (newData.length > 0) setData((prevData) => [...prevData, ...newData]);
      setNextPageUrl('');
      setLoading(false);
    };

    fetchData();
  }, [nextPageUrl, loading]);

  return (
    <ul className="w-full flex flex-col gap-5">
      {data.map((term, index) => (
        <HomeCard key={index} term={term} />
      ))}
      {nextPageUrl && (
        <div className="w-full h-fit" ref={loader}>
          {loading && <SkeletonList />}
        </div>
      )}
    </ul>
  );
};

export default HomeList;
