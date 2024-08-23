'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Pricing | MedEase</title>
        <meta name="description" content="Explore our pricing plans and find the right option for you with MedEase." />
      </Head>
      <div className="relative bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-12" id="pricing-section">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <circle cx="20" cy="20" r="15" fill="#E5E7EB" opacity="0.3" />
            <circle cx="80" cy="80" r="25" fill="#F3F4F6" opacity="0.3" />
            <circle cx="50" cy="30" r="30" fill="#E5E7EB" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12" id="pricing-header">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-600">
              Our Pricing Plans
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xl mx-auto leading-relaxed">
              Choose the plan that suits your needs and enjoy seamless access to our services. We offer a variety of options to ensure the best fit for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Basic Plan */}
            <div
              id="basic-plan"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-50 w-full sm:w-80 md:w-96 lg:w-80 xl:w-1/4 mx-auto flex flex-col"
            >
              <div className="bg-blue-600 text-white p-4 sm:p-6 text-center rounded-t-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Basic Plan</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$29 <span className="text-sm sm:text-lg">/ month</span></p>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Essential features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Monthly updates
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Select Plan</button>
                </div>
              </div>
            </div>

            {/* Standard Plan */}
            <div
              id="standard-plan"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-50 w-full sm:w-80 md:w-96 lg:w-80 xl:w-1/4 mx-auto flex flex-col"
            >
              <div className="bg-teal-600 text-white p-4 sm:p-6 text-center rounded-t-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Standard Plan</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$59 <span className="text-sm sm:text-lg">/ month</span></p>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All basic features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Bi-weekly updates
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <button className="bg-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">Select Plan</button>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div
              id="premium-plan"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-50 w-full sm:w-80 md:w-96 lg:w-80 xl:w-1/4 mx-auto flex flex-col"
            >
              <div className="bg-gray-800 text-white p-4 sm:p-6 text-center rounded-t-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Premium Plan</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$99 <span className="text-sm sm:text-lg">/ month</span></p>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All standard features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Weekly updates
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <button className="bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600">Select Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
