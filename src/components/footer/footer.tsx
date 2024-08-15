import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-sky flex items-center w-full mt-4 py-2">
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
          <Link href="/about" aria-label="About Us" className="hover:underline">
            About
          </Link>
          <Link href="/contact" aria-label="Contact Us" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy" aria-label="Privacy Policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" aria-label="Terms of Service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
