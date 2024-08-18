"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var NavLinks = function (_a) {
    var item = _a.item, onClick = _a.onClick, className = _a.className, isAuthenticated = _a.isAuthenticated, userRole = _a.userRole;
    var pathName = (0, navigation_1.usePathname)();
    // Determine if the link should be rendered based on authentication and role
    if (item.path === '/search' && !isAuthenticated) {
        return null;
    }
    if (item.path === '/admin' && (!isAuthenticated || userRole !== 'admin')) {
        return null;
    }
    // Determine if the link is active
    var isActive = pathName === item.path;
    return (<link_1.default href={item.path} onClick={onClick} className={"text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 \n                  ".concat(isActive
            ? 'text-blue-600 bg-blue-100'
            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50', " \n                  hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 ").concat(className)} aria-current={isActive ? 'page' : undefined}>
      {item.title}
    </link_1.default>);
};
exports.default = NavLinks;
