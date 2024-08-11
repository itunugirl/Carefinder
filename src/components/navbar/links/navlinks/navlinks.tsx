import '@styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    item: {
        path: string;
        title: string;
    };
}

const NavLinks: React.FC<NavLinkProps> = ({ item }) => {
    const pathName = usePathname();
    return (
        <Link 
            href={item.path} 
            className={`container ${pathName === item.path ? 'active' : ''}`}
        >
            {item.title}
        </Link>
    );
}

export default NavLinks;
