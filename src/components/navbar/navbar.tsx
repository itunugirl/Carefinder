'use client';

import Link from 'next/link';
import Image from 'next/image';
import Links from '@components/navbar/links/links';
import { useState, useEffect } from 'react';
import { useAuth } from '@contexts/AuthContext';
import { usePathname } from 'next/navigation';
import '@styles/globals.css';
import classNames from 'classnames';
import useScrollSpy from '@hooks/useScrollSpy'; // Ensure the path is correct

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isAuthenticated, logout, userRole } = useAuth();
  const pathname = usePathname();

  // Track which section is currently in view
  const sectionIds = ['home', 'about', 'services', 'pricing']; // Adjust based on your section IDs
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    const sectionId = path.replace('/', '');
    return activeSection === sectionId || pathname === path;
  };

  const renderLinks = () => (
    <>
      <Links />
      {isAuthenticated && (
        <>
          <Link
            href="/search"
            className={classNames('text-white hover:text-gray-200', {
              'font-bold border-b-2 border-white': isActive('/search'),
            })}
            aria-current={isActive('/search') ? 'page' : undefined}
          >
            Search
          </Link>
          {userRole === 'admin' && (
            <Link
              href="/admin"
              className={classNames('text-white hover:text-gray-200', {
                'font-bold border-b-2 border-white': isActive('/admin'),
              })}
              aria-current={isActive('/admin') ? 'page' : undefined}
            >
              Admin Dashboard
            </Link>
          )}
          <button
            onClick={logout}
            className="text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            aria-label="Logout"
          >
            Logout
          </button>
        </>
      )}
    </>
  );

  return (
    <nav
      className={classNames(
        'sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between w-full p-4 transition-all duration-300',
        isScrolled ? 'bg-gradient-to-r from-blue-600 to-teal-600 shadow-md' : 'bg-gradient-to-r from-blue-500 to-teal-500'
      )}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="https://i.postimg.cc/6qysBHBj/medease-logo.png"
            alt="MedEase logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-xl md:text-2xl font-bold text-white hidden lg:block">MedEase</p>
        </Link>
        <button
          className="md:hidden flex items-center p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className="hidden md:flex flex-wrap space-x-4 md:space-x-6">
        {renderLinks()}
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed top-0 right-0 text-white shadow-lg w-full p-6 z-50 rounded-t-lg bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="flex flex-col space-y-4">
            {renderLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
