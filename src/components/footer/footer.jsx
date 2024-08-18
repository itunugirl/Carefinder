"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var Footer = function () {
    return (<footer className="bg-blue-sky flex items-center w-full mt-4 py-2">
      <div className="container mx-auto flex flex-col items-center px-2 text-xxs">
        {/* Footer Main Content */}
        <div className="flex flex-col items-center mb-0.5">
          {/* Footer Logo */}
          <div className="font-extrabold">
            MedEase
          </div>

          {/* Footer Text */}
          <div className="text-center">
            MedEase Health Services © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center space-x-1">
          <link_1.default href="/about" aria-label="About Us" className="hover:underline">
            About
          </link_1.default>
          <link_1.default href="/contact" aria-label="Contact Us" className="hover:underline">
            Contact
          </link_1.default>
          <link_1.default href="/privacy" aria-label="Privacy Policy" className="hover:underline">
            Privacy Policy
          </link_1.default>
          <link_1.default href="/terms" aria-label="Terms of Service" className="hover:underline">
            Terms of Service
          </link_1.default>
        </div>
      </div>
    </footer>);
};
exports.default = Footer;
