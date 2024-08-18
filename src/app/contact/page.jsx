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
var index_1 = require("@firebaseConfig/index");
var firestore_1 = require("firebase/firestore");
var ContactPage = function () {
    var _a = (0, react_1.useState)(""), name = _a[0], setName = _a[1];
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), phoneNumber = _c[0], setPhoneNumber = _c[1];
    var _d = (0, react_1.useState)(""), message = _d[0], setMessage = _d[1];
    var _e = (0, react_1.useState)(null), error = _e[0], setError = _e[1];
    var _f = (0, react_1.useState)(false), loading = _f[0], setLoading = _f[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var emailRegex, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    // Basic validation
                    if (!name || !email || !message) {
                        setError("All fields are required.");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        setError("Please enter a valid email address.");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // Submit form data to Firestore
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(index_1.db, 'contacts'), {
                            name: name,
                            email: email,
                            phoneNumber: phoneNumber,
                            message: message,
                            timestamp: new Date(),
                        })];
                case 2:
                    // Submit form data to Firestore
                    _a.sent();
                    // Clear form fields on success
                    setName("");
                    setEmail("");
                    setPhoneNumber("");
                    setMessage("");
                    setError(null);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError("Failed to send message. Please try again.");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="flex flex-col md:flex-row min-h-screen bg-blue-gradient md:bg-gray-100">
      {/* Image Container (Hidden on small devices) */}
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <image_1.default src="https://i.postimg.cc/mZ50Gzrm/contact-me-2.png" alt="Contact Image" fill style={{ objectFit: 'contain' }} className="absolute inset-0"/>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Contact Us</h1>
          <input type="text" value={name} onChange={function (e) { return setName(e.target.value); }} placeholder="Name" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <input type="email" value={email} onChange={function (e) { return setEmail(e.target.value); }} placeholder="Email Address" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          <input type="tel" value={phoneNumber} onChange={function (e) { return setPhoneNumber(e.target.value); }} placeholder="Phone Number (optional)" className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea value={message} onChange={function (e) { return setMessage(e.target.value); }} placeholder="Message" cols={30} rows={6} className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button type="submit" disabled={loading} className={"w-full py-4 px-6 text-white bg-blue-600 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(loading ? 'opacity-50 cursor-not-allowed' : '')}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>);
};
exports.default = ContactPage;
