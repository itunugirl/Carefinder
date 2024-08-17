'use client';

// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole?: 'user' | 'admin'; // Define roles
  login: (role?: 'user' | 'admin') => void; // Login with optional role
  logout: () => void;
  hasPermission: (permission: string) => boolean; // Check permissions
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin' | undefined>(undefined);

  // Log in a user with a specified role (defaults to 'user')
  const login = (role: 'user' | 'admin' = 'user') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Log out the user and clear their role
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(undefined);
  };

  // Check if the user has a specific permission
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
