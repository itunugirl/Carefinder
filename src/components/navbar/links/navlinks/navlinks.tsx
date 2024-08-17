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

  if (item.path === '/search' && !isAuthenticated) {
    // If user is not authenticated and the path is '/search', don't render the link
    return null;
  }

  return (
    <Link 
      href={item.path}
      onClick={onClick}
      className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 
                  ${pathName === item.path 
                    ? 'text-blue-600 bg-blue-100' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  } 
                  hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      aria-current={pathName === item.path ? 'page' : undefined}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
