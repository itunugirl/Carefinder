"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AuthContext_1 = require("@contexts/AuthContext");
var link_1 = __importDefault(require("next/link"));
var AdminDashboard = function () {
    var _a = (0, AuthContext_1.useAuth)(), isAuthenticated = _a.isAuthenticated, userRole = _a.userRole;
    if (!isAuthenticated) {
        return <p className="p-8">You must be logged in to access this page.</p>;
    }
    if (userRole !== 'admin') {
        return <p className="p-8">You do not have access to this page.</p>;
    }
    return (<div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6">Manage users, settings, and view reports here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p className="mb-4">View and manage user accounts.</p>
          <link_1.default href="/admin/users" className="text-blue-500 hover:underline">
            Go to User Management
          </link_1.default>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p className="mb-4">Modify application settings.</p>
          <link_1.default href="/admin/settings" className="text-blue-500 hover:underline">
            Go to Settings
          </link_1.default>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <p className="mb-4">View and analyze reports and analytics.</p>
          <link_1.default href="/admin/reports" className="text-blue-500 hover:underline">
            Go to Reports
          </link_1.default>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Data Management</h2>
          <p className="mb-4">Manage and review application data.</p>
          <link_1.default href="/admin/data" className="text-blue-500 hover:underline">
            Go to Data Management
          </link_1.default>
        </div>
      </div>
    </div>);
};
exports.default = AdminDashboard;
