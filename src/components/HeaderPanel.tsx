import { Disclosure, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform -translate-x-full opacity-0"
      enterTo="transform translate-x-0 opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform translate-x-0 opacity-100"
      leaveTo="transform -translate-x-full opacity-0"
    >
      <Disclosure.Panel className="sm:hidden bg-gray-800">
        <div className="w-full flex flex-col items-center justify-center space-y-1 px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <HeaderSearch />
          </div>
        </div>
      </Disclosure.Panel>
    </Transition>
  );
};

export default Header;
