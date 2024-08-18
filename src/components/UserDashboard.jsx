"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/UserDashboard.tsx
var AuthContext_1 = require("@contexts/AuthContext");
var UserDashboard = function () {
    var _a = (0, AuthContext_1.useAuth)(), isAuthenticated = _a.isAuthenticated, userRole = _a.userRole;
    if (!isAuthenticated || userRole !== 'user') {
        return <p>You do not have access to this page.</p>;
    }
    return (<div>
      <h1>User Dashboard</h1>
      <p>View and interact with content, and manage your personal settings here.</p>
      {/* User-specific features */}
    </div>);
};
exports.default = UserDashboard;
