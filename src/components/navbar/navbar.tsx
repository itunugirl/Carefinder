'use client';

import Link from 'next/link';
import Image from 'next/image';
import Links from '@components/navbar/links/links'; // Ensure this is correctly imported
import { useState } from 'react';
import { useAuth } from '@contexts/AuthContext'; // Import useAuth
import { usePathname } from 'next/navigation'; // Import usePathname
import '@styles/globals.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, userRole } = useAuth(); // Access authentication status and user role
  const pathname = usePathname(); // Get current pathname

  return (
    <nav className='sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-b-lg'>
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
          <p className="text-xl md:text-2xl font-bold text-white hidden lg:block">MedEase</p>
        </Link>

        {/* Mobile menu button */}
        <button
          className='md:hidden flex items-center p-2 text-white focus:outline-none'
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
        {isAuthenticated && (
          <>
            <Link
              href="/search"
              className={`text-white hover:text-gray-200 ${pathname === '/search' ? 'font-bold border-b-2 border-white' : ''}`}
              aria-current={pathname === '/search' ? 'page' : undefined}
            >
              Search
            </Link>
            {userRole === 'admin' && (
              <Link
                href="/admin"
                className={`text-white hover:text-gray-200 ${pathname === '/admin' ? 'font-bold border-b-2 border-white' : ''}`}
                aria-current={pathname === '/admin' ? 'page' : undefined}
              >
                Admin Dashboard
              </Link>
            )}
            <button
              onClick={logout}
              className="text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className='md:hidden fixed top-0 right-0 bg-gray-900 text-white shadow-lg w-full p-6 z-50 rounded-t-lg'>
          <div className='flex flex-col space-y-4'>
            <Links />
            {isAuthenticated && (
              <>
                <Link
                  href="/search"
                  className={`text-white hover:text-gray-300 ${pathname === '/search' ? 'font-bold border-b-2 border-white' : ''}`}
                  aria-current={pathname === '/search' ? 'page' : undefined}
                >
                  Search
                </Link>
                {userRole === 'admin' && (
                  <Link
                    href="/admin"
                    className={`text-white hover:text-gray-300 ${pathname === '/admin' ? 'font-bold border-b-2 border-white' : ''}`}
                    aria-current={pathname === '/admin' ? 'page' : undefined}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
