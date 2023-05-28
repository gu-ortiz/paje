import Link from 'next/link';
import { formatDate } from 'utils/date';

export interface Term {
  codigo_tuss: string | number;
  termo: string;
  tabela: string | number;
  dt_inicio_vigencia: string;
  dt_fim_vigencia: string;
  dt_implantacao: string;
}

const HomeCard = ({ term }: { term: Term }) => {
  return (
    <Link
      href={`${term.codigo_tuss}`}
      className="w-full px-5 py-1 rounded-md bg-white shadow-lg overflow-hidden"
    >
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col">
          <span className="text-sm font-bold">Código</span>
          <span className="">{term.codigo_tuss}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Termo</span>
          <span className="">{term.termo}</span>
        </div>
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-bold">Início de Vigência</span>
          <span className="">{formatDate(term.dt_inicio_vigencia)}</span>
        </div>
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-bold">Fim de Vigência</span>
          <span className="">{formatDate(term.dt_fim_vigencia)}</span>
        </div>
        <div className="hidden xl:flex flex-col">
          <span className="text-sm font-bold">Fim de Implantação</span>
          <span className="">{formatDate(term.dt_implantacao)}</span>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
