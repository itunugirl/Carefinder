"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("@firebaseConfig/index");
var firestore_1 = require("firebase/firestore");
var AuthContext_1 = require("@contexts/AuthContext");
var UsersPage = function () {
    var _a = (0, AuthContext_1.useAuth)(), isAuthenticated = _a.isAuthenticated, userRole = _a.userRole;
    var _b = (0, react_1.useState)([]), users = _b[0], setUsers = _b[1];
    var _c = (0, react_1.useState)({ name: '', email: '', role: 'user' }), newUser = _c[0], setNewUser = _c[1];
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    (0, react_1.useEffect)(function () {
        var fetchUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var querySnapshot, usersList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, firestore_1.getDocs)((0, firestore_1.collection)(index_1.db, 'users'))];
                    case 1:
                        querySnapshot = _a.sent();
                        usersList = querySnapshot.docs.map(function (doc) { return (__assign({ id: doc.id }, doc.data())); });
                        setUsers(usersList);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Error fetching users:', err_1);
                        setError('Failed to load users.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchUsers();
    }, []);
    var handleAddUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(index_1.db, 'users'), newUser)];
                case 1:
                    _a.sent();
                    setNewUser({ name: '', email: '', role: 'user' });
                    setError(null);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error('Error adding user:', err_2);
                    setError('Failed to add user.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firestore_1.deleteDoc)((0, firestore_1.doc)(index_1.db, 'users', id))];
                case 1:
                    _a.sent();
                    setUsers(users.filter(function (user) { return user.id !== id; }));
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.error('Error deleting user:', err_3);
                    setError('Failed to delete user.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (!isAuthenticated || userRole !== 'admin') {
        return <p className="p-8">You do not have access to this page.</p>;
    }
    return (<div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" value={newUser.name} onChange={function (e) { return setNewUser(__assign(__assign({}, newUser), { name: e.target.value })); }} className="border rounded p-2"/>
          <input type="email" placeholder="Email" value={newUser.email} onChange={function (e) { return setNewUser(__assign(__assign({}, newUser), { email: e.target.value })); }} className="border rounded p-2"/>
          <select value={newUser.role} onChange={function (e) { return setNewUser(__assign(__assign({}, newUser), { role: e.target.value })); }} className="border rounded p-2">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add User
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="space-y-4">
        {users.map(function (user) { return (<div key={user.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-400">{user.role}</p>
            </div>
            <button onClick={function () { return handleDeleteUser(user.id); }} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>); })}
      </div>
    </div>);
};
exports.default = UsersPage;
