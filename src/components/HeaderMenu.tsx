'use client';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  EllipsisHorizontalCircleIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { classNames } from 'utils/classnames';

const menuItems = [
  {
    name: 'Tabelas',
    icon: (
      <Squares2X2Icon className="block h-5 w-5 stroke-1" aria-hidden="true" />
    ),
    path: '/tabelas',
    target: '_self'
  },
  {
    name: 'Ajuda',
    icon: (
      <QuestionMarkCircleIcon
        className="block h-5 w-5 stroke-1"
        aria-hidden="true"
      />
    ),
    path: '/ajuda',
    target: '_self'
  },
  {
    name: 'Download TUSS',
    icon: (
      <ArrowDownTrayIcon
        className="block h-5 w-5 stroke-1"
        aria-hidden="true"
      />
    ),
    path: 'https://www.ans.gov.br/arquivos/extras/tiss/Padrao_TISS_Representacao_de_Conceitos_em_Saude_202303.zip',
    target: '_blank'
  },
  {
    name: 'Anvisa',
    icon: (
      <ArrowTopRightOnSquareIcon
        className="block h-5 w-5 stroke-1"
        aria-hidden="true"
      />
    ),
    path: 'https://consultas.anvisa.gov.br/',
    target: '_blank'
  }
];

const HeaderMenu = () => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <Fragment>
          <div className="h-full flex items-center">
            <Menu.Button
              className={classNames(
                open ? 'text-white' : 'text-zinc-50',
                'inline-flex items-center justify-center rounded-full sm:hover:text-white focus:outline-none'
              )}
            >
              <EllipsisHorizontalCircleIcon
                className="block h-10 w-10 stroke-1"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-40 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-md overflow-hidden focus:outline-none">
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.path}
                      target={item.target}
                      className={classNames(
                        'flex gap-2 px-4 py-2 text-sm',
                        active
                          ? 'bg-gray-800 text-white'
                          : 'bg-transparent text-gray-800'
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Fragment>
      )}
    </Menu>
  );
};

export default HeaderMenu;
