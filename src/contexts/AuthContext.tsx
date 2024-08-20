'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole?: 'user' | 'admin';
  login: (role: 'user' | 'admin') => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin' | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // New state to track client-side rendering
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set client-side flag
    const storedRole = localStorage.getItem('userRole');
    const authenticated = !!storedRole;
    setIsAuthenticated(authenticated);
    setUserRole(storedRole as 'user' | 'admin' | undefined);
    setLoading(false);
  }, []);

  // Only use router if client-side
  const login = (role: 'user' | 'admin') => {
    if (isClient) {
      setIsAuthenticated(true);
      setUserRole(role);
      localStorage.setItem('userRole', role);
      router.push(role === 'admin' ? '/admin' : '/search');
    }
  };

  const logout = () => {
    if (isClient) {
      setIsAuthenticated(false);
      setUserRole(undefined);
      localStorage.removeItem('userRole');
      router.push('/login');
    }
  };

  const hasPermission = (permission: string) => {
    if (!userRole) return false;

    const adminPermissions = [
      'manage_users',
      'manage_settings',
      'view_reports',
      'modify_settings'
    ];

    const userPermissions = [
      'view_content',
      'interact_content',
      'submit_data'
    ];

    if (userRole === 'admin') {
      return adminPermissions.includes(permission);
    } else if (userRole === 'user') {
      return userPermissions.includes(permission);
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, hasPermission, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
