'use client';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { classNames } from 'utils/classnames';
import TermLabel from './TermLabel';

const TermPanel = () => {
  const [options] = useState({
    TUSS: {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2
    },
    Anvisa: {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16
    }
  });

  return (
    <Tab.Group>
      <Tab.List className="w-full sm:w-2/3 lg:w-1/2 flex rounded-t-md bg-white">
        {Object.keys(options).map((option) => (
          <Tab
            key={option}
            className={({ selected }) =>
              classNames(
                'w-full rounded-t-md py-3 text-sm font-medium leading-4',
                selected
                  ? 'bg-gray-800 shadow text-white'
                  : 'hover:bg-gray-800/10 hover:text-white text-gray-800'
              )
            }
          >
            {option}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels
        className={classNames(
          'w-full h-fit p-4 sm:p-6 lg:p-8 text-white',
          'rounded-b-md sm:rounded-tr-md bg-gray-800 shadow-lg overflow-hidden'
        )}
      >
        {Object.values(options).map((info, idx) => (
          <Tab.Panel
            key={idx}
            className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
          >
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
            <TermLabel label="Código do Termo" text={info.title} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TermPanel;
