'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderPanel from './HeaderPanel';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  return (
    <header className="w-full h-24 bg-gray-800">
      <Disclosure as="nav" className="h-full">
        {({ open }) => (
          <Fragment>
            <div className="w-full h-full flex justify-center items-center shadow-sm">
              <div className="relative container h-full flex mx-auto justify-between px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-zinc-100 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <HeaderLogo />
                  </div>
                </div>
                <div className="relative hidden sm:flex flex-grow items-center justify-center">
                  <div className="w-full flex justify-center space-x-4">
                    <HeaderSearch />
                  </div>
                </div>
                <div className="relative flex items-center">
                  <HeaderMenu />
                </div>
              </div>
            </div>
            <HeaderPanel />
          </Fragment>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
