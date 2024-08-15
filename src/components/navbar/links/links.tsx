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

  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const session: boolean = true; // Temporary session state
  const isAdmin: boolean = true; // Temporary admin state

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className='relative'>
      {/* Desktop navigation links */}
      <div className='hidden md:flex items-center space-x-4'>
        {navLinks.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLinks item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className='text-blue-500 hover:text-blue-700' onClick={() => { /* Logout logic */ }}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Menu button for small devices */}
      <button 
        className={`md:hidden flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
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
      <div id="mobile-menu" className={`md:hidden fixed top-0 right-0 bg-blue-500 text-white shadow-lg p-4 w-64 max-w-full max-h-[80vh] overflow-y-auto transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className='absolute top-4 right-4 text-white' 
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='flex flex-col space-y-4 mt-16'>
          {navLinks.map((link) => (
            <NavLinks item={link} key={link.title} onClick={handleMenuItemClick} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} onClick={handleMenuItemClick} />
              )}
              <button className='text-blue-500 hover:text-blue-700' onClick={handleMenuItemClick}>Logout</button>
            </>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} onClick={handleMenuItemClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
