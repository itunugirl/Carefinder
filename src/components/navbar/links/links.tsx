'use client';

import { useState } from 'react';
import { useAuth } from '@contexts/AuthContext';
import NavLinks from '@components/navbar/links/navlinks/navlinks';
import { usePathname } from 'next/navigation';

const Links: React.FC = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Services', path: '/services' },
    { title: 'Search', path: '/search' },
    { title: 'Pricing', path: '/pricing' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const { isAuthenticated, userRole, logout } = useAuth();

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Determine if a path is active
  const isActive = (path: string) => pathName === path ? 'text-blue-500 font-bold' : '';

  return (
    <nav className='relative'>
      {/* Desktop navigation links */}
      <div className='hidden md:flex items-center space-x-4'>
        <div className='flex space-x-4'>
          {navLinks.map((link) => (
            <NavLinks 
              key={link.path} 
              item={link} 
              className={isActive(link.path)} 
              isAuthenticated={isAuthenticated} 
              userRole={userRole}
            />
          ))}
        </div>
        <div className='border-l border-gray-600 pl-4 flex space-x-4'>
          {isAuthenticated ? (
            <>
              {userRole === 'admin' && (
                <NavLinks 
                  key="/admin"
                  item={{ title: 'Admin', path: '/admin' }} 
                  className={isActive('/admin')} 
                  isAuthenticated={isAuthenticated} 
                  userRole={userRole}
                />
              )}
              <button 
                className='text-blue-500 hover:text-blue-700' 
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLinks 
                key="/signup"
                item={{ title: 'Sign Up', path: '/signup' }} 
                className={isActive('/signup')} 
                isAuthenticated={isAuthenticated} 
                userRole={userRole}
              />
              <NavLinks 
                key="/login"
                item={{ title: 'Login', path: '/login' }} 
                className={isActive('/login')} 
                isAuthenticated={isAuthenticated} 
                userRole={userRole}
              />
            </>
          )}
        </div>
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
        className={`md:hidden fixed top-0 right-0 blue-gradient text-white shadow-lg p-4 w-64 max-w-full max-h-[80vh] overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
      >
        <div className='flex flex-col space-y-4 mt-16'>
          {navLinks.map((link) => (
            <NavLinks 
              key={link.path}
              item={link} 
              className={isActive(link.path)} 
              onClick={closeMenu} 
              isAuthenticated={isAuthenticated} 
            />
          ))}
          <div className='border-t border-gray-600 mt-4 pt-4'>
            {isAuthenticated ? (
              <>
                {userRole === 'admin' && (
                  <NavLinks 
                    key="/admin"
                    item={{ title: 'Admin', path: '/admin' }} 
                    className={isActive('/admin')} 
                    onClick={closeMenu} 
                    isAuthenticated={isAuthenticated} 
                  />
                )}
                <button 
                  className='text-blue-500 hover:text-blue-700' 
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLinks 
                  key="/signup"
                  item={{ title: 'Sign Up', path: '/signup' }} 
                  className={isActive('/signup')} 
                  onClick={closeMenu} 
                  isAuthenticated={isAuthenticated} 
                />
                <NavLinks 
                  key="/login"
                  item={{ title: 'Login', path: '/login' }} 
                  className={isActive('/login')} 
                  onClick={closeMenu} 
                  isAuthenticated={isAuthenticated} 
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Links;
