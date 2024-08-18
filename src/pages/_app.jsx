"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@styles/globals.css");
var layout_1 = __importDefault(require("@app/layout"));
require("@fortawesome/fontawesome-free/css/all.min.css");
var AuthContext_1 = require("@/contexts/AuthContext");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<AuthContext_1.AuthProvider>
      <layout_1.default>
        <Component {...pageProps}/>
      </layout_1.default>
    </AuthContext_1.AuthProvider>);
}
exports.default = MyApp;
