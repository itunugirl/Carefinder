"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var image_1 = __importDefault(require("next/image"));
var react_1 = __importStar(require("react"));
var auth_1 = require("firebase/auth");
var index_1 = require("@firebaseConfig/index");
var firestore_1 = require("firebase/firestore");
var navigation_1 = require("next/navigation");
var app_1 = require("firebase/app");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var SignUpPage = function () {
    var _a = (0, react_1.useState)(""), surname = _a[0], setSurname = _a[1];
    var _b = (0, react_1.useState)(""), firstName = _b[0], setFirstName = _b[1];
    var _c = (0, react_1.useState)(""), phoneNumber = _c[0], setPhoneNumber = _c[1];
    var _d = (0, react_1.useState)(""), gender = _d[0], setGender = _d[1];
    var _e = (0, react_1.useState)(""), email = _e[0], setEmail = _e[1];
    var _f = (0, react_1.useState)(""), password = _f[0], setPassword = _f[1];
    var _g = (0, react_1.useState)(""), confirmPassword = _g[0], setConfirmPassword = _g[1];
    var _h = (0, react_1.useState)(null), error = _h[0], setError = _h[1];
    var _j = (0, react_1.useState)(false), passwordVisible = _j[0], setPasswordVisible = _j[1];
    var _k = (0, react_1.useState)(false), loading = _k[0], setLoading = _k[1];
    var router = (0, navigation_1.useRouter)(); // Make sure to use the hook here
    var handleSignUp = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var emailRegex, phoneRegex, userCredential, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!email || !password || !confirmPassword) {
                        setError("All fields are required.");
                        return [2 /*return*/];
                    }
                    if (password !== confirmPassword) {
                        setError("Passwords do not match.");
                        return [2 /*return*/];
                    }
                    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        setError("Please enter a valid email address.");
                        return [2 /*return*/];
                    }
                    phoneRegex = /^[0-9]*$/;
                    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
                        setError("Phone number can only contain numbers.");
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)(index_1.auth, email, password)];
                case 2:
                    userCredential = _a.sent();
                    return [4 /*yield*/, (0, auth_1.updateProfile)(userCredential.user, {
                            displayName: "".concat(firstName, " ").concat(surname),
                            photoURL: gender
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, firestore_1.setDoc)((0, firestore_1.doc)(index_1.db, "users", userCredential.user.uid), {
                            firstName: firstName,
                            surname: surname,
                            phoneNumber: phoneNumber,
                            gender: gender,
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, auth_1.sendEmailVerification)(userCredential.user)];
                case 5:
                    _a.sent();
                    router.push("/login");
                    return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.error("Sign up error:", error_1);
                    if (error_1 instanceof app_1.FirebaseError) {
                        switch (error_1.code) {
                            case 'auth/email-already-in-use':
                                setError("This email address is already in use. Please use a different email.");
                                break;
                            case 'auth/invalid-email':
                                setError("Invalid email address.");
                                break;
                            case 'auth/weak-password':
                                setError("Password should be at least 6 characters.");
                                break;
                            default:
                                setError("Failed to sign up. Please try again.");
                        }
                    }
                    else {
                        setError("Failed to sign up. Please try again.");
                    }
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var handleGoogleSignIn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, auth_1.signInWithPopup)(index_1.auth, index_1.googleProvider)];
                case 2:
                    _a.sent();
                    router.push("/search");
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error("Google sign-in error:", error_2);
                    setError("Failed to sign in with Google. Please try again.");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleFacebookSignIn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, auth_1.signInWithPopup)(index_1.auth, index_1.facebookProvider)];
                case 2:
                    _a.sent();
                    router.push("/search");
                    return [3 /*break*/, 5];
                case 3:
                    error_3 = _a.sent();
                    console.error("Facebook sign-in error:", error_3);
                    setError("Failed to sign in with Facebook. Please try again.");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var togglePasswordVisibility = function () { return setPasswordVisible(function (prev) { return !prev; }); };
    return (<div className="flex min-h-screen bg-blue-gradient md:bg-gray-100">
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <image_1.default src="https://i.postimg.cc/QMv0y5m7/sign-up.png" alt="Sign Up Image" fill style={{ objectFit: 'contain' }} className="absolute inset-0"/>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleSignUp} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Create an Account</h1>
          <input type="text" value={surname} onChange={function (e) { return setSurname(e.target.value); }} placeholder="Surname" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <input type="text" value={firstName} onChange={function (e) { return setFirstName(e.target.value); }} placeholder="First Name" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <input type="email" value={email} onChange={function (e) { return setEmail(e.target.value); }} placeholder="Email Address" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <input type="text" value={phoneNumber} onChange={function (e) { return setPhoneNumber(e.target.value); }} placeholder="Phone Number (optional)" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <div className="relative">
            <select value={gender} onChange={function (e) { return setGender(e.target.value); }} className="appearance-none w-full p-4 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" className="text-gray-600">Select Gender</option>
              <option value="Male" className="text-gray-600">Male</option>
              <option value="Female" className="text-gray-600">Female</option>
              <option value="Other" className="text-gray-600">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <input type={passwordVisible ? "text" : "password"} value={password} onChange={function (e) { return setPassword(e.target.value); }} placeholder="Password" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500" aria-label={passwordVisible ? "Hide password" : "Show password"}>
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <input type="password" value={confirmPassword} onChange={function (e) { return setConfirmPassword(e.target.value); }} placeholder="Confirm Password" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" disabled={loading} className={"w-full py-4 px-6 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 ".concat(loading ? 'opacity-50 cursor-not-allowed' : '')}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <div className="flex justify-between items-center mt-6">
            <button type="button" onClick={handleGoogleSignIn} className={"flex items-center justify-center p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 ".concat(loading ? 'opacity-50 cursor-not-allowed' : '')} disabled={loading}>
              <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faGoogle} className="text-blue-500 w-6 h-6"/>
              <span className="ml-2 text-blue-500">Sign Up with Google</span>
            </button>
            <button type="button" onClick={handleFacebookSignIn} className={"flex items-center justify-center p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 ".concat(loading ? 'opacity-50 cursor-not-allowed' : '')} disabled={loading}>
              <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebook} className="text-blue-600 w-6 h-6"/>
              <span className="ml-2 text-blue-600">Sign Up with Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = SignUpPage;
