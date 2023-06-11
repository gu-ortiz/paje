'use client';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { TermType } from 'types/term';
import { classNames } from 'utils/classnames';
import { formatDate } from 'utils/date';
import { getTermLabel } from 'utils/tuss';
import TermLabel from './TermLabel';

const TermPanel = ({ term }: { term: TermType }) => {
  const [options] = useState({
    TUSS: {
      codigo_tuss: term.codigo_tuss,
      termo: term.termo,
      tabela: term.tabela,
      dt_inicio_vigencia: formatDate(term.dt_inicio_vigencia),
      dt_fim_vigencia: formatDate(term.dt_fim_vigencia),
      dt_implantacao: formatDate(term.dt_implantacao),
      extra_fields: term.extra_fields || {}
    },
    Anvisa: term.anvisa_fields || {}
  });

  return (
    <Tab.Group>
      <Tab.List className="w-full lg:w-1/2 flex rounded-t-md bg-white">
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
          const extraFields = info.extra_fields as {
            [key: string]: string;
          };
          return (
            <Tab.Panel
              key={idx}
              className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
            >
              {Object.keys(info)
                .filter((i) => i !== 'extra_fields')
                .map((label) => (
                  <TermLabel
                    key={label}
                    label={getTermLabel(label)}
                    text={String(info[label as keyof typeof info])}
                  />
                ))}
              {extraFields &&
                typeof info.extra_fields === 'object' &&
                Object.keys(info.extra_fields).map((label) => (
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
