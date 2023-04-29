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
      <button className="focus:outline-none" onClick={handleClick}>
        <Image
          src={logo}
          alt="Pajé"
          width={60}
          height={60}
          className="object-contain"
          onClick={handleClick}
        />
      </button>
    </div>
  );
};

export default HeaderLogo;
