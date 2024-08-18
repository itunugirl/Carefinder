'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole?: 'user' | 'admin';
  login: (role?: 'user' | 'admin') => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin' | undefined>(undefined);

  // Function to log in with a specified role
  const login = (role: 'user' | 'admin' = 'user') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Function to log out and reset authentication state
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(undefined);
  };

  // Function to check if the user has a specific permission
  const hasPermission = (permission: string) => {
    if (!userRole) return false;

    // Define permissions for each role
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

    // Check permissions based on the user role
    if (userRole === 'admin') {
      return adminPermissions.includes(permission);
    } else if (userRole === 'user') {
      return userPermissions.includes(permission);
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, hasPermission }}>
      {children}
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
