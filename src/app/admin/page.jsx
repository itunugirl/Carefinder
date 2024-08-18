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
var react_1 = __importStar(require("react"));
var react_markdown_editor_lite_1 = __importDefault(require("react-markdown-editor-lite"));
require("react-markdown-editor-lite/lib/index.css");
var react_markdown_1 = __importDefault(require("react-markdown"));
var index_1 = require("@firebaseConfig/index");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var index_2 = require("@firebaseConfig/index");
var AdminPage = function () {
    var _a = (0, react_1.useState)(''), markdown = _a[0], setMarkdown = _a[1];
    var _b = (0, react_1.useState)(''), preview = _b[0], setPreview = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(null), success = _d[0], setSuccess = _d[1]; // New state for success messages
    var _e = (0, react_1.useState)(false), loading = _e[0], setLoading = _e[1];
    var _f = (0, react_1.useState)(null), user = _f[0], setUser = _f[1];
    (0, react_1.useEffect)(function () {
        var unsubscribe = (0, auth_1.onAuthStateChanged)(index_2.auth, function (user) {
            setUser(user);
        });
        return function () { return unsubscribe(); };
    }, []);
    var handleEditorChange = function (_a) {
        var text = _a.text;
        setMarkdown(text);
        setPreview(text);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user) {
                        setError('You must be logged in to save.');
                        return [2 /*return*/];
                    }
                    if (!markdown.trim()) {
                        setError('Content cannot be empty.');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    setError(null); // Clear any previous error
                    setSuccess(null); // Clear any previous success message
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(index_1.db, 'hospitals'), {
                            content: markdown,
                            createdAt: new Date(),
                            author: user.email || 'Anonymous', // Handle cases where email might be undefined
                        })];
                case 2:
                    _a.sent();
                    setMarkdown('');
                    setPreview('');
                    setSuccess('Document saved successfully!'); // Set success message
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error('Error saving document:', err_1); // Log the error for debugging
                    setError('Failed to save the document.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    if (!user) {
        return <p className="p-8">You must be logged in to view this page.</p>;
    }
    return (<div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <react_markdown_editor_lite_1.default value={markdown} style={{ height: '500px' }} renderHTML={function (text) { return <react_markdown_1.default>{text}</react_markdown_1.default>; }} onChange={handleEditorChange}/>
      <button onClick={handleSave} className={"mt-4 ".concat(loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500', " text-white px-4 py-2 rounded")} disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>} {/* Display success message */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Preview</h2>
        <react_markdown_1.default>{preview}</react_markdown_1.default>
      </div>
    </div>);
};
exports.default = AdminPage;
