import '@styles/globals.css';
import NavLinks from '@components/navbar/links/navLinks/navLinks';
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
    { title: 'Export', path: '/Export' },
    { title: 'Share', path: '/share' },
    { title: 'Contact', path: '/contact' },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const session: boolean = true; // Temporary session state
  const isAdmin: boolean = true; // Temporary admin state

  return (
    <div className='relative'>
      {/* Desktop navigation links */}
      <div className='desktopLinks'>
        <div className='flex space-x-4'>
          {navLinks.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button>
                Logout
              </button>
            </>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      </div>

      {/* Menu button for small devices */}
      <button 
        className='menuButton' 
        onClick={() => setOpen(prev => !prev)}
      >
        Menu
      </button>

      {/* Mobile menu */}
      {open && (
        <div className='mobileMenu'>
          {navLinks.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
