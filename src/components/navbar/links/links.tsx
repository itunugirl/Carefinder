'use client';

import '@styles/globals.css';
import NavLinks from '@components/navbar/links/navlinks/navlinks';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  title: string;
  path: string;
}

const Links = () => {
  const navLinks: NavLink[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Search', path: '/search' },
    { title: 'Sign up', path: '/signup' },
    { title: 'Share', path: '/share' },
    { title: 'Contact', path: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const session: boolean = true; // Temporary session state
  const isAdmin: boolean = true; // Temporary admin state

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => (pathName === path ? 'text-blue-500 font-bold' : '');

  return (
    <nav className='relative'>
      {/* Desktop navigation links */}
      <div className='hidden md:flex items-center space-x-4'>
        <NavLinks item={{ title: 'Home', path: '/' }} className={isActive('/')} />
        <div className='hidden lg:flex space-x-4'>
          {navLinks.slice(1).map((link) => (
            <NavLinks item={link} key={link.title} className={isActive(link.path)} />
          ))}
        </div>
        {session ? (
          <>
            {isAdmin && (
              <NavLinks item={{ title: 'Admin', path: '/admin' }} className={isActive('/admin')} />
            )}
            <button 
              className='text-blue-500 hover:text-blue-700' 
              onClick={() => { /* Logout logic */ }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLinks item={{ title: 'Login', path: '/login' }} className={isActive('/login')} />
        )}
      </div>

      {/* Menu button for small devices */}
      <button 
        className='md:hidden fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-blue-500 text-white text-2xl transition-transform duration-300'
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden fixed top-0 right-0 bg-blue-gradient text-white shadow-lg p-4 w-64 max-w-full max-h-[80vh] overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
      >
        <div className='flex flex-col space-y-4 mt-16'>
          {navLinks.map((link) => (
            <NavLinks item={link} key={link.title} className={isActive(link.path)} onClick={closeMenu} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: 'Admin', path: '/admin' }} className={isActive('/admin')} onClick={closeMenu} />
              )}
              <button className='text-blue-500 hover:text-blue-700' onClick={closeMenu}>Logout</button>
            </>
          ) : (
            <NavLinks item={{ title: 'Login', path: '/login' }} className={isActive('/login')} onClick={closeMenu} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Links;
