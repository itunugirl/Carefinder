"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/SignInComponent.tsx
var react_1 = __importDefault(require("react"));
var useSignIn_1 = __importDefault(require("@hooks/useSignIn"));
var SignInComponent = function () {
    var handleSignIn = (0, useSignIn_1.default)().handleSignIn;
    return (<div>
      <button onClick={function () { return handleSignIn('google'); }}>Sign in with Google</button>
      <button onClick={function () { return handleSignIn('facebook'); }}>Sign in with Facebook</button>
    </div>);
};
exports.default = SignInComponent;
