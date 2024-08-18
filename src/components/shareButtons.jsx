"use strict";
// components/shareButtons/ShareButton.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var platformColors = {
    whatsapp: 'text-green-500',
    instagram: 'text-pink-500',
    twitter: 'text-blue-400',
    facebook: 'text-blue-600',
    email: 'text-gray-600',
};
var ShareButton = function (_a) {
    var platform = _a.platform, url = _a.url, color = _a.color;
    var Icon;
    switch (platform) {
        case 'whatsapp':
            Icon = fa_1.FaWhatsapp;
            break;
        case 'instagram':
            Icon = fa_1.FaInstagram;
            break;
        case 'twitter':
            Icon = fa_1.FaTwitter;
            break;
        case 'facebook':
            Icon = fa_1.FaFacebook;
            break;
        case 'email':
            Icon = fa_1.FaEnvelope;
            break;
        default:
            return null;
    }
    // Use platform-specific color if provided, otherwise fallback to default color
    var platformColor = color || platformColors[platform] || 'text-gray-600';
    return (<a href={url} target="_blank" rel="noopener noreferrer" className={"transition-colors hover:text-blue-700 ".concat(platformColor)} aria-label={"Share on ".concat(platform)}>
      <Icon className="text-2xl mx-2"/>
    </a>);
};
exports.default = ShareButton;
