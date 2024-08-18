"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@styles/globals.css");
var navbar_1 = __importDefault(require("@components/navbar/navbar"));
var footer_1 = __importDefault(require("@components/footer/footer"));
var AuthContext_1 = require("@/contexts/AuthContext");
var RootLayout = function (_a) {
    var children = _a.children;
    return (<html lang="en">
      <body>
        <AuthContext_1.AuthProvider>
          <div className="main">
            <div className="gradient"/>
          </div>
          {/* Move Nav outside of the .app container */}
          <navbar_1.default />
          <main className="app">
            {children}
            <footer_1.default />
          </main>
        </AuthContext_1.AuthProvider>
      </body>
    </html>);
};
exports.default = RootLayout;
