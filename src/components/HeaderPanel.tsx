'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import HeaderSearch from './HeaderSearch';

const HeaderPanel = () => {
  return (
    <Disclosure as="div" className="h-full flex justify-center items-center">
      {({ open }) => (
        <Fragment>
          <div className="relative flex justify-center items-center sm:hidden">
            <Disclosure.Button className="inline-flex justify-center items-center rounded-md text-zinc-100 focus:outline-none">
              {open ? (
                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform -translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform -translate-x-full opacity-0"
          >
            <Disclosure.Panel className="absolute inset-x-0 top-24 z-10 w-full sm:hidden bg-gray-800">
              <div className="w-full flex flex-col justify-center items-center space-y-1 px-4 sm:px-6 lg:px-8 py-2">
                <div className="w-full flex items-center justify-between">
                  <HeaderSearch />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </Fragment>
      )}
    </Disclosure>
  );
};

export default HeaderPanel;
