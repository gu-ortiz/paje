'use client';
import { Menu, Transition } from '@headlessui/react';
import {
  BookmarkIcon,
  Cog6ToothIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { classNames } from 'utils/classnames';

const menuItems = [
  {
    name: 'TUSS',
    icon: (
      <BookmarkIcon className="block h-5 w-5 stroke-1" aria-hidden="true" />
    ),
    path: ''
  },
  {
    name: 'Configurações',
    icon: (
      <Cog6ToothIcon className="block h-5 w-5 stroke-1" aria-hidden="true" />
    ),
    path: ''
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
              <UserCircleIcon
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-zinc-300 overflow-hidden focus:outline-none">
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.path}
                      className={classNames(
                        active
                          ? 'bg-zinc-300 text-zinc-50'
                          : 'bg-transparent text-gray-800',
                        'flex gap-2 px-4 py-2 text-sm'
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </a>
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
