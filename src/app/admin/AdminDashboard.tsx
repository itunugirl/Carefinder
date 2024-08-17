'use client';

import React from 'react';
import { useAuth } from '@contexts/AuthContext';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <p className="p-8">You must be logged in to access this page.</p>;
  }

  if (userRole !== 'admin') {
    return <p className="p-8">You do not have access to this page.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6">Manage users, settings, and view reports here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p className="mb-4">View and manage user accounts.</p>
          <Link href="/admin/users" className="text-blue-500 hover:underline">
            Go to User Management
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p className="mb-4">Modify application settings.</p>
          <Link href="/admin/settings" className="text-blue-500 hover:underline">
            Go to Settings
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <p className="mb-4">View and analyze reports and analytics.</p>
          <Link href="/admin/reports" className="text-blue-500 hover:underline">
            Go to Reports
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Data Management</h2>
          <p className="mb-4">Manage and review application data.</p>
          <Link href="/admin/data" className="text-blue-500 hover:underline">
            Go to Data Management
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
