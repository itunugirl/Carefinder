import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
  onClick?: () => void;
  className?: string;
  isAuthenticated?: boolean;
  userRole?: string;
}

const NavLinks: React.FC<NavLinkProps> = ({
  item,
  onClick,
  className = '', // Default to an empty string
  isAuthenticated = false, // Default to false
  userRole = '', // Default to an empty string
}) => {
  const pathName = usePathname();

  // Determine if the link should be rendered based on authentication and role
  if (item.path === '/search' && !isAuthenticated) {
    return null;
  }

  if (item.path === '/admin' && (!isAuthenticated || userRole !== 'admin')) {
    return null;
  }

  // Determine if the link is active
  const isActive = pathName === item.path;

  return (
    <Link
      href={item.path}
      onClick={onClick}
      className={classNames(
        'text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300',
        {
          'text-blue-600 bg-blue-100': isActive,
          'text-gray-600 hover:text-blue-600 hover:bg-blue-50': !isActive,
        },
        'hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
