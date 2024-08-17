'use client';

// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole?: 'user' | 'admin'; // Define roles
  login: (role?: 'user' | 'admin') => void; // Login with optional role
  logout: () => void;
  setUserRole?: (role: 'user' | 'admin') => void; // Optional role setter
  hasPermission: (permission: string) => boolean; // Check permissions
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin' | undefined>(undefined);

  const login = (role: 'user' | 'admin' = 'user') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(undefined);
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
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, setUserRole, hasPermission }}>
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
