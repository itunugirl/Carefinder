'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <>
      <Head>
        <title>Pricing | MedEase</title>
        <meta name="description" content="Explore our pricing plans and find the right option for you with MedEase." />
      </Head>
      <div className="relative bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen py-12 px-4" id="pricing-section">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <circle cx="20" cy="20" r="15" fill="#E5E7EB" opacity="0.3" />
            <circle cx="80" cy="80" r="25" fill="#F3F4F6" opacity="0.3" />
            <circle cx="50" cy="30" r="30" fill="#E5E7EB" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-8">
          {/* Header Section */}
          <div className="text-center mb-12" id="pricing-header">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-600">
              Our Pricing Plans
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that suits your needs and enjoy seamless access to our services. We offer a variety of options to ensure the best fit for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col md:flex-row md:justify-center md:gap-8" id="pricing-cards">
            {/* Basic Plan */}
            <div
              id="basic-plan"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-50 w-full max-w-md mx-auto mb-8 md:mb-0 flex flex-col p-6"
            >
              <div className="bg-blue-600 text-white p-6 text-center rounded-t-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Basic Plan</h2>
                <p className="text-3xl md:text-4xl font-bold">$29 <span className="text-lg">/ month</span></p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Essential features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Monthly updates
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div
              id="standard-plan"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-50 w-full max-w-md mx-auto mb-8 md:mb-0 flex flex-col p-6"
            >
              <div className="bg-teal-600 text-white p-6 text-center rounded-t-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Standard Plan</h2>
                <p className="text-3xl md:text-4xl font-bold">$59 <span className="text-lg">/ month</span></p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All Basic Plan features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Weekly updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access to premium features
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div
              id="premium-plan"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100 w-full max-w-md mx-auto flex flex-col p-6"
            >
              <div className="bg-blue-800 text-white p-6 text-center rounded-t-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Premium Plan</h2>
                <p className="text-3xl md:text-4xl font-bold">$99 <span className="text-lg">/ month</span></p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    All Standard Plan features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24/7 support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Daily updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-blue-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
