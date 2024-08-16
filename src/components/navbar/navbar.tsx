'use client';

import Link from 'next/link';
import Image from 'next/image';
import Links from '@components/navbar/links/links';
import { useState } from 'react';
import '@styles/globals.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between w-full p-4 bg-white shadow-md'>
      {/* Container for Logo and Toggle Button */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        {/* Logo and Brand Name */}
        <Link href="/" className='flex items-center gap-2 md:gap-3'>
          <Image
            src="https://i.postimg.cc/6qysBHBj/medease-logo.png"
            alt="MedEase logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-xl md:text-2xl font-bold text-gray-800 hidden lg:block">MedEase</p>
        </Link>

        {/* Mobile menu button */}
        <button
          className='md:hidden flex items-center p-2 text-gray-800 focus:outline-none'
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex flex-wrap space-x-4 md:space-x-6'>
        <Links />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className='md:hidden fixed top-full right-0 bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-lg w-full p-6 z-50'>
          <div className='flex flex-col space-y-4'>
            <Links />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;