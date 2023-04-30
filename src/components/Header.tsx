import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderPanel from './HeaderPanel';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  return (
    <header className="w-full h-24 bg-gray-800">
      <div className="w-full h-full flex justify-center items-center shadow-sm">
        <div className="container h-full flex mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-full flex justify-between items-center">
            <div className="h-full flex justify-center items-center">
              <HeaderPanel />
            </div>
            <div className="h-full flex justify-center items-center">
              <HeaderLogo />
            </div>
            <div className="h-full hidden justify-center items-center sm:flex flex-grow space-x-4">
              <HeaderSearch />
            </div>
            <div className="h-full flex justify-center items-center">
              <HeaderMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
