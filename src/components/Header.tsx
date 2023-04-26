'use client';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  return (
    <header className="w-full h-20">
      <div className="w-full h-full flex justify-center items-center border-b border-gray-200 shadow-sm">
        <div className="container h-full flex mx-auto justify-between px-4 sm:px-6 lg:px-8">
          <HeaderLogo />
          <HeaderSearch />
          <div className="relative flex"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
