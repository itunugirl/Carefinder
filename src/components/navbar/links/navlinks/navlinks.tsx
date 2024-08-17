import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
  onClick?: () => void; // Optional onClick prop
  className?: string; // Allow className prop
  isAuthenticated?: boolean; // Optional prop to check authentication
}

const NavLinks: React.FC<NavLinkProps> = ({ item, onClick, className, isAuthenticated }) => {
  const pathName = usePathname();

  // If the path is '/search' and the user is not authenticated, don't render the link
  if (item.path === '/search' && !isAuthenticated) {
    return null;
  }

  // Determine if the link is active
  const isActive = pathName === item.path;

  return (
    <Link 
      href={item.path}
      onClick={onClick}
      className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 
                  ${isActive 
                    ? 'text-blue-600 bg-blue-100' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  } 
                  hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
