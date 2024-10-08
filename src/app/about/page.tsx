'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Head>
        <title>About MedEase</title>
        <meta name="description" content="Learn more about MedEase and how we simplify healthcare access in Nigeria." />
      </Head>
      <div id="about" className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-teal-50">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#E5E7EB" opacity="0.3" />
            <circle cx="80" cy="80" r="20" fill="#F3F4F6" opacity="0.3" />
            <circle cx="40" cy="60" r="30" fill="#E5E7EB" opacity="0.2" />
          </svg>
        </div>

        <div className="container mx-auto p-4 md:p-6 relative z-10 flex flex-col">
          {/* Header Section */}
          <div className="text-center mb-6" data-aos="fade-up-right">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              About MedEase
            </h2>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">
              Empowering Your Healthcare Journey
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <span className="text-blue-600 font-bold">At MedEase,</span> we believe that accessing quality healthcare should be seamless and straightforward. Our platform bridges the gap between you and essential medical services in Nigeria.
            </p>
          </div>

          {/* What We Do Section */}
          <section className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6 relative overflow-hidden" data-aos="slide-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                What We Do
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="bounce">
                  <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
                    Find Hospitals
                  </h3>
                  <p className="text-gray-700">
                    Easily locate hospitals in your area with our intuitive search functionality. Enter your location or choose from a list of cities to get relevant results.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="bounce">
                  <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
                    Export Information
                  </h3>
                  <p className="text-gray-700">
                    Download and save hospital details in a convenient CSV format, perfect for sharing or personal records.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="bounce">
                  <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
                    Share Effortlessly
                  </h3>
                  <p className="text-gray-700">
                    Share hospital information with others through email or shareable links, ensuring that everyone has access to crucial healthcare resources.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="relative z-10 bg-gradient-to-r from-blue-100 to-teal-100 p-4 md:p-6 rounded-lg shadow-lg mb-6" data-aos="fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-30"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="text-blue-600">
                <h1 className="text-3xl md:text-4xl font-extrabold">2+</h1>
                <p className="text-gray-700 text-base md:text-lg">Years of Experience</p>
              </div>
              <div className="text-blue-600">
                <h1 className="text-3xl md:text-4xl font-extrabold">10 K+</h1>
                <p className="text-gray-700 text-base md:text-lg">Projects Completed</p>
              </div>
              <div className="text-blue-600">
                <h1 className="text-3xl md:text-4xl font-extrabold">15 K+</h1>
                <p className="text-gray-700 text-base md:text-lg">Satisfied Clients</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
