'use client';

import Link from 'next/link';
import Image from 'next/image';
import Links from '@components/navbar/links/links';
import { useState } from 'react';
import '@styles/globals.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='navbar flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-16 pt-3'>
      <Link href="/" className='flex items-center gap-2'>
        <Image
          src="/assets/images/MedEase_Logo.png"
          alt="MedEase logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="text-xl md:text-2xl">MedEase</p>
      </Link>

      {/* Desktop Links */}
      <div className='hidden md:flex'>
        <Links />
      </div>

      {/* Mobile menu button */}
      <button
        className='md:hidden flex items-center'
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        {isMenuOpen ? (
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 right-0 bg-white shadow-lg w-full p-4'>
          <Links />
        </div>
      )}
    </nav>
  );
};

export default Nav;
