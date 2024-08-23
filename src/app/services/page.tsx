'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ServicePage: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once or every time
    });
  }, []);

  const handleToggle = (service: string) => {
    setActiveService(activeService === service ? null : service);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://i.postimg.cc/2yzHSB8V/service3.jpg"
            alt="Hero Banner showcasing premium services"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-30"
          />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" data-aos="fade-up">
            Our Premium Services
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            At <span className="font-semibold">MedEase</span>, we are committed to providing exceptional services tailored to your needs. Explore our offerings designed to improve your well-being and enhance your health journey.
          </p>
        </div>
      </div>

      {/* Service Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          
          {/* Service Card 1 */}
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105" 
            data-aos="flip-down"
            data-aos-delay="100"
          >
            <Image
              src="https://i.postimg.cc/CLCF2397/service1.jpg"
              alt="Comprehensive Health Assessments"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-4">Comprehensive Health Assessments</h2>
              <p className={`text-gray-700 mb-4 ${activeService === 'assessment' ? 'line-clamp-none' : 'line-clamp-3'}`}>
                Our Comprehensive Health Assessments are designed to give you a complete picture of your health. From detailed physical examinations to advanced diagnostic tests, we ensure that you receive accurate and timely information about your health status. Our goal is to help you make informed decisions and maintain your well-being.
              </p>
              <button 
                onClick={() => handleToggle('assessment')} 
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm md:text-base lg:text-lg"
                aria-expanded={activeService === 'assessment'}
              >
                {activeService === 'assessment' ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105" 
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="https://i.postimg.cc/7Yqv5fQ1/service2.avif"
              alt="Personalized Wellness Programs"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-4">Personalized Wellness Programs</h2>
              <p className={`text-gray-700 mb-4 ${activeService === 'wellness' ? 'line-clamp-none' : 'line-clamp-3'}`}>
                Transform your lifestyle with our Personalized Wellness Programs. Whether you’re looking to improve your fitness, manage stress, or achieve specific health goals, our tailored programs are here to guide you every step of the way. Experience a holistic approach to wellness that fits seamlessly into your daily life.
              </p>
              <button 
                onClick={() => handleToggle('wellness')} 
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm md:text-base lg:text-lg"
                aria-expanded={activeService === 'wellness'}
              >
                {activeService === 'wellness' ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105" 
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <Image
              src="https://i.postimg.cc/2yzHSB8V/service3.jpg"
              alt="Expert Consultations"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-4">Expert Consultations</h2>
              <p className={`text-gray-700 mb-4 ${activeService === 'consultations' ? 'line-clamp-none' : 'line-clamp-3'}`}>
                Benefit from one-on-one Expert Consultations with our highly qualified specialists. Our consultations offer personalized advice and treatment plans based on your unique health needs. Whether you have a specific concern or need general guidance, our experts are here to support you with their extensive knowledge and experience.
              </p>
              <button 
                onClick={() => handleToggle('consultations')} 
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm md:text-base lg:text-lg"
                aria-expanded={activeService === 'consultations'}
              >
                {activeService === 'consultations' ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicePage;
