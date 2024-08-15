import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
  onClick?: () => void; // Optional onClick prop
}

const NavLinks: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const pathName = usePathname();

  return (
    <Link 
      href={item.path}
      onClick={onClick} // Add onClick handler
      className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 
                  ${pathName === item.path 
                    ? 'text-blue-600 bg-blue-100' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  } 
                  hover:underline`} // Optional: Add underline effect on hover
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
