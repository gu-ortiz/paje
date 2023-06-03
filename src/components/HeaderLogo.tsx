import logo from 'assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div className="relative h-full flex justify-center items-center">
      <Link href="/" className="flex gap-2 focus:outline-none">
        <Image
          src={logo}
          alt="Pajé"
          width={36}
          height={36}
          className="object-contain"
          priority
        />
        <span className="h-10 flex text-2xl text-white font-serif items-center">
          Pajé
        </span>
      </Link>
    </div>
  );
};

export default HeaderLogo;
