"use strict";
// src/app/(auth)/login/page.tsx
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var auth_1 = require("firebase/auth");
var index_1 = require("@firebaseConfig/index");
var firestore_1 = require("firebase/firestore");
var app_1 = require("firebase/app");
var useSignIn_1 = __importDefault(require("@hooks/useSignIn"));
var image_1 = __importDefault(require("next/image"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var LoginPage = function () {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
    var router = (0, navigation_1.useRouter)(); // Use Next.js router
    var handleSignIn = (0, useSignIn_1.default)().handleSignIn; // Use custom hook
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var userCredential, user, userDoc, docSnap, userData, userRole, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setError(null);
                    if (!email || !password) {
                        setError("Email and password are required.");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(index_1.auth, email, password)];
                case 2:
                    userCredential = _a.sent();
                    user = userCredential.user;
                    if (!user.emailVerified) {
                        setError("Please verify your email before logging in.");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    userDoc = (0, firestore_1.doc)(index_1.db, 'users', user.uid);
                    return [4 /*yield*/, (0, firestore_1.getDoc)(userDoc)];
                case 3:
                    docSnap = _a.sent();
                    if (docSnap.exists()) {
                        userData = docSnap.data();
                        userRole = userData.role || 'user';
                        if (userRole === 'admin') {
                            router.push('/admin');
                        }
                        else {
                            router.push('/search');
                        }
                    }
                    else {
                        setError("User role not found.");
                        setLoading(false);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    if (error_1 instanceof app_1.FirebaseError) {
                        switch (error_1.code) {
                            case 'auth/wrong-password':
                                setError("Incorrect password. Please try again.");
                                break;
                            case 'auth/user-not-found':
                                setError("No user found with this email. Please check your email address.");
                                break;
                            case 'auth/too-many-requests':
                                setError("Too many requests. Please try again later.");
                                break;
                            default:
                                setError("Failed to log in. Please check your credentials and try again.");
                        }
                    }
                    else {
                        setError("An unexpected error occurred. Please try again.");
                    }
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="flex min-h-screen bg-blue-gradient md:bg-gray-100">
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <image_1.default src="https://i.postimg.cc/RZRkyPJH/login.png" alt="Login Image" fill style={{ objectFit: 'contain' }} className="absolute inset-0"/>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleLogin} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg" aria-live="assertive">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Sign in to MedEase</h1>
          <input type="email" value={email} onChange={function (e) { return setEmail(e.target.value); }} placeholder="Email" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required aria-describedby="email-error"/>
          <input type="password" value={password} onChange={function (e) { return setPassword(e.target.value); }} placeholder="Password" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required aria-describedby="password-error"/>
          {error && <p id="login-error" className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className={"w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-700 transition duration-300 ".concat(loading ? 'opacity-50 cursor-not-allowed' : '')} disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <div className="mt-6 space-y-4">
            <button onClick={function () { return handleSignIn('google'); }} aria-label="Log in with Google" className="flex items-center justify-center bg-red-600 text-white py-4 px-6 rounded-md w-full hover:bg-red-700 transition duration-300" disabled={loading}>
              <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faGoogle} className="mr-2"/>
              Log in with Google
            </button>
            <button onClick={function () { return handleSignIn('facebook'); }} aria-label="Log in with Facebook" className="flex items-center justify-center bg-blue-600 text-white py-4 px-6 rounded-md w-full hover:bg-blue-700 transition duration-300" disabled={loading}>
              <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebook} className="mr-2"/>
              Log in with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = LoginPage;
