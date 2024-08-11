'use client';

import Link from 'next/link';
import Image from 'next/image';
import Links from '@components/navbar/links/Links';
import '@styles/globals.css';

const Nav = () => {
  // Assuming you will later use authentication
  // const { data: session } = useSession();
  // const [providers, setProviders] = useState<any>(null);
  
  // useEffect(() => {
  //   const fetchProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   };
  //   fetchProviders();
  // }, []);
  
  return (
    <nav className='navbar flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image
          src="/assets/images/MedEase_Logo.png"
          alt="MedEase logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">MedEase</p>
      </Link>
      <Links />
    </nav>
  );
};

export default Nav;
