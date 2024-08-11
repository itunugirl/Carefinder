import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container bg-blue-sky p-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Main Content */}
        <div className="flex flex-col items-center mb-2">
          {/* Footer Logo */}
          <div className="footer-logo text-xl font-extrabold mb-2">
            MedEase
          </div>

          {/* Footer Text */}
          <div className="footer-text text-sm text-center">
            MedEase Health Services © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links flex flex-col space-y-2">
          <Link href="/about" aria-label="About Us" className="footer-link">
            About
          </Link>
          <Link href="/contact" aria-label="Contact Us" className="footer-link">
            Contact
          </Link>
          <Link href="/privacy" aria-label="Privacy Policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link href="/terms" aria-label="Terms of Service" className="footer-link">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
