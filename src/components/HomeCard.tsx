import Link from 'next/link';
import { TermType } from 'types/term';
import { formatDate } from 'utils/date';

const HomeCard = ({ term }: { term: TermType }) => {
  return (
    <li className="w-full rounded-md bg-white shadow-lg overflow-hidden">
      <Link
        href={`${term.tabela}/${term.codigo_tuss}`}
        prefetch={false}
        className="w-full px-5 py-2 gap-4 grid grid-cols-1 lg:grid-cols-[1fr_2fr] 2xl:grid-cols-[1fr_3fr_1fr_1fr_1fr]"
      >
        <div className="flex flex-col">
          <span className="text-sm font-bold">Código</span>
          <span className="">{term.codigo_tuss}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Termo</span>
          <span className="">{term.termo}</span>
        </div>
        <div className="hidden 2xl:flex flex-col">
          <span className="text-sm font-bold">Início de Vigência</span>
          <span className="">{formatDate(term.dt_inicio_vigencia)}</span>
        </div>
        <div className="hidden 2xl:flex flex-col">
          <span className="text-sm font-bold">Fim de Vigência</span>
          <span className="">{formatDate(term.dt_fim_vigencia)}</span>
        </div>
        <div className="hidden 2xl:flex flex-col">
          <span className="text-sm font-bold">Fim de Implantação</span>
          <span className="">{formatDate(term.dt_implantacao)}</span>
        </div>
      </Link>
    </li>
  );
};

export default HomeCard;
