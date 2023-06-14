'use client';
import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { ResponseAnvisaType } from 'types/api';
import { TermType } from 'types/tuss';
import { getAnvisa } from 'utils/api';
import { classNames } from 'utils/classnames';
import { formatDate } from 'utils/date';
import { getTermLabel } from 'utils/tuss';
import Anvisa from './Anvisa';
import TermLabel from './TermLabel';

const TermPanel = ({ id, term }: { id: string; term: TermType }) => {
  const [data] = useState({
    codigo_tuss: term.codigo_tuss,
    termo: term.termo,
    tabela: term.tabela,
    dt_inicio_vigencia: formatDate(term.dt_inicio_vigencia),
    dt_fim_vigencia: formatDate(term.dt_fim_vigencia),
    dt_implantacao: formatDate(term.dt_implantacao),
    forma_de_envio: term.forma_de_envio || '',
    grupo: term.grupo || '',
    extra_fields: term.extra_fields || {}
  });
  const [anvisa, setAnvisa] = useState<ResponseAnvisaType>({
    status: 200,
    statusText: '',
    error: false,
    body: {}
  });
  const [showAnvisa] = useState([19, 20].includes(term.tabela));

  useEffect(() => {
    if (showAnvisa) {
      const fetchData = async () => {
        const response = await getAnvisa(
          `${process.env.NEXT_PUBLIC_API_URL}/anvisa/${id}`
        );
        setAnvisa(response);
      };

      fetchData();
    }
  }, [id, showAnvisa]);

  return (
    <Tab.Group>
      <Tab.List
        className={classNames(
          'w-full flex rounded-t-md bg-white',
          showAnvisa ? 'lg:w-full' : 'lg:w-1/2'
        )}
      >
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-t-md py-3 text-sm font-medium leading-4 focus:outline-none',
              selected
                ? 'bg-gray-800 shadow text-white cursor-default'
                : 'hover:bg-gray-800/10 hover:text-white text-gray-800'
            )
          }
        >
          TUSS
        </Tab>
        {showAnvisa && (
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-t-md py-3 text-sm font-medium leading-4 focus:outline-none',
                selected
                  ? 'bg-gray-800 shadow text-white cursor-default'
                  : 'hover:bg-gray-800/10 hover:text-white text-gray-800'
              )
            }
          >
            Anvisa
          </Tab>
        )}
      </Tab.List>
      <Tab.Panels
        className={classNames(
          'w-full h-fit p-4 sm:p-6 lg:p-8 text-white',
          'rounded-b-md bg-gray-800 shadow-md overflow-hidden'
        )}
      >
        <Tab.Panel className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
          {Object.keys(data)
            .filter((i) => i !== 'extra_fields')
            .map((label) => (
              <TermLabel
                key={label}
                label={getTermLabel(label)}
                text={String(data[label as keyof typeof data])}
              />
            ))}
          {Object.keys(data.extra_fields).map((label) => (
            <TermLabel
              key={label}
              label={getTermLabel(label)}
              text={String(data.extra_fields[label])}
            />
          ))}
        </Tab.Panel>
        <Tab.Panel className="w-full">
          <Anvisa response={anvisa} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TermPanel;
