'use client';
import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { TermType } from 'types/tuss';
import { classNames } from 'utils/classnames';
import { formatDate } from 'utils/date';
import TermLabel from './TermLabel';

const TermPanel = ({ term }: { term: TermType }) => {
  const [options, setOptions] = useState({
    TUSS: {
      codigo_tuss: term.codigo_tuss,
      termo: term.termo,
      tabela: term.tabela,
      dt_inicio_vigencia: formatDate(term.dt_inicio_vigencia),
      dt_fim_vigencia: formatDate(term.dt_fim_vigencia),
      dt_implantacao: formatDate(term.dt_implantacao),
      forma_de_envio: term.forma_de_envio || '',
      grupo: term.grupo || '',
      extra_fields: term.extra_fields || {}
    }
  });

  useEffect(() => {
    if ([19, 20].includes(term.tabela))
      setOptions((prevOptions) => ({
        ...prevOptions,
        Anvisa: term.anvisa_fields || {}
      }));
  }, [term.anvisa_fields, term.tabela]);

  return (
    <Tab.Group>
      <Tab.List
        className={classNames(
          'w-full flex rounded-t-md bg-white',
          'Anvisa' in options ? 'lg:w-4/6' : 'lg:w-2/6'
        )}
      >
        {Object.keys(options).map(
          (option) =>
            Object.keys(options[option as keyof typeof options]).length >=
              0 && (
              <Tab
                key={option}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-t-md py-3 text-sm font-medium leading-4 focus:outline-none',
                    selected
                      ? 'bg-gray-800 shadow text-white cursor-default'
                      : 'hover:bg-gray-800/10 hover:text-white text-gray-800'
                  )
                }
              >
                {option}
              </Tab>
            )
        )}
      </Tab.List>
      <Tab.Panels
        className={classNames(
          'w-full h-fit p-4 sm:p-6 lg:p-8 text-white',
          'rounded-b-md lg:rounded-tr-md bg-gray-800 shadow-md overflow-hidden'
        )}
      >
        {Object.values(options).map((info, idx) => {
          const extraFields =
            (info.extra_fields as {
              [key: string]: string;
            }) || {};
          return (
            <Tab.Panel
              key={idx}
              className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
            >
              {Object.keys(info).length > 0
                ? Object.keys(info)
                    .filter((i) => i !== 'extra_fields')
                    .map((label) => (
                      <TermLabel
                        key={label}
                        label={label}
                        text={String(info[label as keyof typeof info])}
                      />
                    ))
                : idx === 1 && (
                    <div className="w-full text-center col-span-2">
                      <p className="text-base text-white">Desculpe</p>
                      <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                        A API da Anvisa parece estar fora do ar
                      </h1>
                      <p className="mt-6 text-base leading-7 text-white">
                        Tente novamente mais tarde
                      </p>
                    </div>
                  )}
              {Object.keys(extraFields).map((label) => (
                <TermLabel
                  key={label}
                  label={label}
                  text={String(extraFields[label])}
                />
              ))}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TermPanel;
