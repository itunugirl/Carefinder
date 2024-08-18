"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var image_1 = __importDefault(require("next/image"));
var links_1 = __importDefault(require("@components/navbar/links/links"));
var react_1 = require("react");
var AuthContext_1 = require("@contexts/AuthContext");
var navigation_1 = require("next/navigation");
require("@styles/globals.css");
var classnames_1 = __importDefault(require("classnames"));
var Nav = function () {
    var _a = (0, react_1.useState)(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var _b = (0, AuthContext_1.useAuth)(), isAuthenticated = _b.isAuthenticated, logout = _b.logout, userRole = _b.userRole;
    var pathname = (0, navigation_1.usePathname)();
    // Close mobile menu on pathname change
    (0, react_1.useEffect)(function () {
        setIsMenuOpen(false);
    }, [pathname]);
    return (<nav className='sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-b-lg'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <link_1.default href="/" className='flex items-center gap-2 md:gap-3'>
          <image_1.default src="https://i.postimg.cc/6qysBHBj/medease-logo.png" alt="MedEase logo" width={40} height={40} className="object-contain"/>
          <p className="text-xl md:text-2xl font-bold text-white hidden lg:block">MedEase</p>
        </link_1.default>
        <button className='md:hidden flex items-center p-2 text-white focus:outline-none' onClick={function () { return setIsMenuOpen(function (prev) { return !prev; }); }} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? (<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>) : (<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>)}
        </button>
      </div>
      <div className='hidden md:flex flex-wrap space-x-4 md:space-x-6'>
        <links_1.default />
        {isAuthenticated && (<>
            <link_1.default href="/search" className={(0, classnames_1.default)('text-white hover:text-gray-200', {
                'font-bold border-b-2 border-white': pathname === '/search'
            })} aria-current={pathname === '/search' ? 'page' : undefined}>
              Search
            </link_1.default>
            {userRole === 'admin' && (<link_1.default href="/admin" className={(0, classnames_1.default)('text-white hover:text-gray-200', {
                    'font-bold border-b-2 border-white': pathname === '/admin'
                })} aria-current={pathname === '/admin' ? 'page' : undefined}>
                Admin Dashboard
              </link_1.default>)}
            <button onClick={logout} className="text-white hover:text-gray-200 transition-transform transform hover:scale-105" aria-label="Logout">
              Logout
            </button>
          </>)}
      </div>
      {isMenuOpen && (<div id="mobile-menu" className='md:hidden fixed top-0 right-0 bg-gray-900 text-white shadow-lg w-full p-6 z-50 rounded-t-lg'>
          <div className='flex flex-col space-y-4'>
            <links_1.default />
            {isAuthenticated && (<>
                <link_1.default href="/search" className={(0, classnames_1.default)('text-white hover:text-gray-300', {
                    'font-bold border-b-2 border-white': pathname === '/search'
                })} aria-current={pathname === '/search' ? 'page' : undefined}>
                  Search
                </link_1.default>
                {userRole === 'admin' && (<link_1.default href="/admin" className={(0, classnames_1.default)('text-white hover:text-gray-300', {
                        'font-bold border-b-2 border-white': pathname === '/admin'
                    })} aria-current={pathname === '/admin' ? 'page' : undefined}>
                    Admin Dashboard
                  </link_1.default>)}
                <button onClick={logout} className="text-white hover:text-gray-300 transition-transform transform hover:scale-105" aria-label="Logout">
                  Logout
                </button>
              </>)}
          </div>
        </div>)}
    </nav>);
};
exports.default = Nav;
