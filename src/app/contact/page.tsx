import Image from 'next/image';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="contact_container flex min-h-screen bg-blue-gradient md:bg-gray-100">
      {/* Image Container (Hidden on small devices) */}
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/images/contact-Me-2.png" 
            alt="Contact Image"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
      </div>
      
      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <input 
            type="text" 
            placeholder="Name and Surname" 
            required
            className="w-full p-3 md:p-4 border border-gray-300 rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            className="w-full p-3 md:p-4 border border-gray-300 rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="tel" 
            placeholder="Phone Number (optional)" 
            className="w-full p-3 md:p-4 border border-gray-300 rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Message" 
            cols={30} 
            rows={6} 
            required
            className="w-full p-3 md:p-4 border border-gray-300 rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit"
            className="w-full h-12 md:h-14 bg-blue-sky text-button-white text-base md:text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;