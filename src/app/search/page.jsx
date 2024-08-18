"use strict";
"use client";
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
var head_1 = __importDefault(require("next/head"));
var shareButtons_1 = __importDefault(require("@components/shareButtons"));
var exportCSV_1 = require("@utils/exportCSV");
var axios_1 = __importDefault(require("axios"));
var SearchPage = function () {
    var _a = (0, react_1.useState)(''), query = _a[0], setQuery = _a[1];
    var _b = (0, react_1.useState)([]), results = _b[0], setResults = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    var _e = (0, react_1.useState)(null), message = _e[0], setMessage = _e[1];
    var _f = (0, react_1.useState)(''), selectedType = _f[0], setSelectedType = _f[1];
    var _g = (0, react_1.useState)([]), filteredResults = _g[0], setFilteredResults = _g[1];
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, searchResults, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (query.trim() === '') {
                        setMessage('Please enter a hospital name or location to search.');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    setError(null);
                    setMessage(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios_1.default.get("https://api.reliancehmo.com/v3/providers")];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        data = response.data;
                        if (data.status === 'success') {
                            searchResults = data.data.filter(function (hospital) {
                                return hospital.address.toLowerCase().includes(query.toLowerCase()) ||
                                    hospital.name.toLowerCase().includes(query.toLowerCase());
                            });
                            setResults(searchResults);
                            setFilteredResults(searchResults);
                            if (searchResults.length === 0) {
                                setMessage('No results found. Try another search.');
                            }
                        }
                        else {
                            setError('No results found. Please try again later.');
                        }
                    }
                    else {
                        setError('Failed to fetch data. Please try again later.');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError('Failed to fetch data. Please try again later.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleClear = function () {
        setQuery('');
        setResults([]);
        setFilteredResults([]);
        setMessage(null);
        setSelectedType('');
    };
    var handleFilter = function (type) {
        setSelectedType(type);
        if (type) {
            var filtered = results.filter(function (hospital) { return hospital.type.name.toLowerCase() === type.toLowerCase(); });
            setFilteredResults(filtered);
        }
        else {
            setFilteredResults(results);
        }
    };
    var handleClearFilter = function () {
        setSelectedType('');
        setFilteredResults(results);
    };
    var formatAddressForMap = function (address) {
        return "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(address));
    };
    var shareUrl = function (hospital) {
        var hospitalUrl = "https://carefinder-medease.vercel.app/hospitals/".concat(hospital.id);
        var encodedUrl = encodeURIComponent(hospitalUrl);
        var encodedMessage = encodeURIComponent("Check out this hospital: ".concat(hospital.name, ", located at ").concat(hospital.address, "."));
        return {
            whatsapp: "https://api.whatsapp.com/send?text=".concat(encodedMessage, " ").concat(encodedUrl),
            instagram: "https://www.instagram.com/share?url=".concat(encodedUrl),
            twitter: "https://twitter.com/intent/tweet?url=".concat(encodedUrl, "&text=").concat(encodedMessage),
            facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodedUrl),
            email: "mailto:?subject=Hospital Information&body=".concat(encodedMessage, " ").concat(hospitalUrl),
        };
    };
    var handleExport = function () {
        var csvData = filteredResults.map(function (hospital) { return ({
            Name: hospital.name,
            Address: hospital.address,
            Phone: hospital.phone_number,
            State: hospital.state.name,
            Type: hospital.type.name,
        }); });
        (0, exportCSV_1.exportToCSV)(csvData, {
            headers: ['Name', 'Address', 'Phone', 'State', 'Type'],
            filename: 'hospitals.csv',
        });
    };
    return (<>
      <head_1.default>
        <title>Search Hospitals</title>
        <meta name="description" content="Find hospitals near you with MedEase."/>
      </head_1.default>
      <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 to-blue-400">
        <section className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">Find Your Nearest Hospitals</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Enter the name or location to find hospitals near you.</p>
          <div className="relative mb-6">
            <input type="text" value={query} onChange={function (e) { return setQuery(e.target.value); }} placeholder="Search by hospital name or location" className="border border-blue-400 p-4 rounded-full shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Search hospitals by name or location"/>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button onClick={handleSearch} className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition" disabled={loading} aria-label="Search for hospitals">
              {loading ? 'Searching...' : 'Search'}
            </button>
            <button onClick={handleClear} className="bg-gray-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-700 transition" aria-label="Clear search results">
              Clear
            </button>
            <button onClick={handleExport} className="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition" aria-label="Export search results as CSV">
              Export CSV
            </button>
          </div>
          {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        </section>
        {results.length > 0 && (<section className="w-full">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Search Results</h2>
            <div className="mb-6 flex justify-end items-center space-x-4">
              <select value={selectedType} onChange={function (e) {
                var value = e.target.value;
                if (value === 'clear') {
                    handleClearFilter();
                }
                else {
                    handleFilter(value);
                }
            }} className="bg-blue-600 text-white border border-blue-500 p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" aria-label="Filter by hospital type">
                <option value="">Filter by Type</option>
                <option value="hospital">Hospital</option>
                <option value="dental">Dental</option>
                <option value="optical clinic">Optical Clinic</option>
                <option value="spa">Spa</option>
                <option value="gym">Gym</option>
                <option value="clear">Clear Filter</option>
              </select>
              {selectedType && selectedType !== 'clear' && (<button onClick={handleClearFilter} className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg" aria-label="Clear filter">
                  Clear Filter
                </button>)}
            </div>
            {loading && !filteredResults.length && !error && !message && <p className="text-center text-blue-600">Loading results...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {filteredResults.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {filteredResults.map(function (hospital) { return (<div key={hospital.id} className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-100 hover:shadow-lg hover:z-10">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-2">{hospital.name}</h3>
                    <p className="text-lg mb-2">
                      <span className="font-bold">Address:</span> 
                      <a href={formatAddressForMap(hospital.address)} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
                        {hospital.address}
                      </a>
                    </p>
                    <p className="text-lg mb-2">
                      <span className="font-bold">Phone:</span> {hospital.phone_number}
                    </p>
                    <p className="text-lg mb-2">
                      <span className="font-bold">State:</span> {hospital.state.name}
                    </p>
                    <p className="text-lg mb-4">
                      <span className="font-bold">Type:</span> {hospital.type.name}
                    </p>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {Object.entries(shareUrl(hospital)).map(function (_a) {
                        var platform = _a[0], url = _a[1];
                        return (<shareButtons_1.default key={platform} platform={platform} url={url}/>);
                    })}
                    </div>
                  </div>); })}
              </div>) : (<p className="text-center text-gray-600">No hospitals found.</p>)}
          </section>)}
      </main>
    </>);
};
exports.default = SearchPage;
