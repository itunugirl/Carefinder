"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = (0, react_1.createContext)(undefined);
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    var _c = (0, react_1.useState)(undefined), userRole = _c[0], setUserRole = _c[1];
    // Function to log in with a specified role
    var login = function (role) {
        if (role === void 0) { role = 'user'; }
        setIsAuthenticated(true);
        setUserRole(role);
    };
    // Function to log out and reset authentication state
    var logout = function () {
        setIsAuthenticated(false);
        setUserRole(undefined);
    };
    // Function to check if the user has a specific permission
    var hasPermission = function (permission) {
        if (!userRole)
            return false;
        // Define permissions for each role
        var adminPermissions = [
            'manage_users',
            'manage_settings',
            'view_reports',
            'modify_settings'
        ];
        var userPermissions = [
            'view_content',
            'interact_content',
            'submit_data'
        ];
        // Check permissions based on the user role
        if (userRole === 'admin') {
            return adminPermissions.includes(permission);
        }
        else if (userRole === 'user') {
            return userPermissions.includes(permission);
        }
        return false;
    };
    return (<AuthContext.Provider value={{ isAuthenticated: isAuthenticated, userRole: userRole, login: login, logout: logout, hasPermission: hasPermission }}>
      {children}
    </AuthContext.Provider>);
};
exports.AuthProvider = AuthProvider;
// Custom hook to use the authentication context
var useAuth = function () {
    var context = (0, react_1.useContext)(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
exports.useAuth = useAuth;
