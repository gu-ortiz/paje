'use client';
import logo from 'assets/logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeaderLogo = () => {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    router.push('/');
  };

  return (
    <div className="relative h-full flex justify-center items-center">
      <a href={'/'} onClick={handleClick}>
        <Image
          src={logo}
          alt="Pajé"
          width={40}
          height={40}
          className="flex justify-center items-center object-contain"
          onClick={handleClick}
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
