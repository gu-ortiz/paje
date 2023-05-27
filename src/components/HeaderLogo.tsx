import logo from 'assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div className="relative h-full flex justify-center items-center">
      <Link href="/" className="focus:outline-none">
        <Image
          src={logo}
          alt="Pajé"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
