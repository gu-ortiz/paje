'use client';
import HomeCard from 'components/HomeCard';
import SkeletonList from 'components/SkeletonList';
import { SearchContext } from 'context/Search';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TermType } from 'types/term';
import { getTerms } from 'utils/api';
import { getSearchParam, getTablesParam, isValidURL } from 'utils/url';

const HomeList = () => {
  const { searchText, filterTables } = useContext(SearchContext);
  const [data, setData] = useState<TermType[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
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
    setData([]);
    if (searchText)
      setNextPageUrl(
        `${process.env.NEXT_PUBLIC_API_URL}/search/?page=1${getTablesParam(
          filterTables
        )}${getSearchParam(searchText)}`
      );
  }, [searchText, filterTables]);

  useEffect(() => {
    const fetchData = async () => {
      if (isValidURL(nextPageUrl) && loading && !status.error) {
        const response = await getTerms(nextPageUrl);

        setStatus({
          status: response.status,
          statusText: response.statusText,
          error: response.error
        });
        setData((prevData) => ({
          ...prevData,
          results: [...prevData, ...response.body.results]
        }));
        setNextPageUrl(response.body.next || '');
        setLoading(false);
      }
    };
    fetchData();
  }, [nextPageUrl, loading, status.error]);

  if (status.error) {
    throw new Error(String(status.status));
  }

  return (
    <ul className="w-full flex flex-col gap-5">
      {data.map((term, index) => (
        <HomeCard key={index} term={term} />
      ))}
      {nextPageUrl && (
        <li className="w-full h-fit" ref={loader}>
          {loading && <SkeletonList />}
        </li>
      )}
    </ul>
  );
};

export default HomeList;
