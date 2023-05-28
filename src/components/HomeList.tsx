import HomeCard, { Term } from './HomeCard';

const HomeList = ({ terms }: { terms: Term[] }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {terms.map((term) => (
        <HomeCard key={term.codigo_tuss} term={term} />
      ))}
    </div>
  );
};

export default HomeList;
