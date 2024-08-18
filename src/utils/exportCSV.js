"use strict";
// src/utils/exportCSV.ts
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportToCSV = void 0;
var escapeCsvValue = function (value) {
    if (typeof value === 'string') {
        // Escape double quotes and wrap in double quotes if the value contains commas, double quotes, or new lines
        return "\"".concat(value.replace(/"/g, '""'), "\"");
    }
    return value;
};
var exportToCSV = function (data, options) {
    // Create CSV content
    var header = options.headers.map(escapeCsvValue).join(',');
    var rows = data.map(function (row) {
        return options.headers.map(function (header) { return escapeCsvValue(row[header] || ''); }).join(',');
    });
    var csvContent = __spreadArray([header], rows, true).join('\n');
    // Create a Blob from the CSV content
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    // Create a link element
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    // Set the link's attributes
    link.setAttribute('href', url);
    link.setAttribute('download', options.filename);
    // Append link to the body and trigger a click to start the download
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
exports.exportToCSV = exportToCSV;
