'use client'
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

// Slick carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='flex flex-col p-4 sm:p-6 md:p-8 lg:p-12'>
      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-6 sm:gap-4 mb-12'>
        {/* Text Content */}
        <div className='flex flex-col gap-6 md:gap-8 flex-1'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4 sm:mb-5 md:mb-6 lg:mb-8'>
            Simplify Your Healthcare Journey with MedEase.
          </h1>
          <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-3 md:mb-4 lg:mb-6'>
            Find, export, and share hospital information effortlessly.
          </h3>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed'>
            MedEase simplifies healthcare access in Nigeria by helping users find, export, and share hospital information. Our user-friendly platform ensures you have all necessary hospital details at your fingertips, enhancing your healthcare experience.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2'>
            <button 
              onClick={openModal} 
              className='p-3 sm:p-2 min-w-[140px] cursor-pointer border-none rounded bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg'>
              Get Started
            </button>
            <button 
              onClick={openModal} 
              className='p-3 sm:p-2 min-w-[140px] cursor-pointer border-none rounded bg-gray-800 text-white hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-lg'>
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='relative hidden md:block w-full md:w-1/2 h-56 sm:h-64 md:h-80 lg:h-[400px]'>
          <Image 
            src='/assets/images/healthCare-3.gif' 
            alt='Healthcare Animation' 
            layout='fill' 
            className='object-cover'
          />
        </div>
      </div>

      {/* About Section */}
      <section className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-12 px-6 sm:px-8 md:px-10 lg:px-12 rounded-lg shadow-lg'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-8'>
            About MedEase
          </h2>
          <div className='relative'>
            <Slider {...carouselSettings}>
              <div className='p-4'>
                <Image
                  src='/assets/images/slideshow1.jpg'
                  alt='Feature 1'
                  layout='responsive'
                  width={700}
                  height={400}
                  className='rounded-lg'
                />
                <p className='mt-4 text-lg text-gray-700'>
                  MedEase provides comprehensive hospital information at your fingertips.
                </p>
              </div>
              <div className='p-4'>
                <Image
                  src='/assets/images/slideshow2.jpg'
                  alt='Feature 2'
                  layout='responsive'
                  width={700}
                  height={400}
                  className='rounded-lg'
                />
                <p className='mt-4 text-lg text-gray-700'>
                  Export and share hospital data effortlessly with our platform.
                </p>
              </div>
              <div className='p-4'>
                <Image
                  src='/assets/images/slideshow3.jpg'
                  alt='Feature 3'
                  layout='responsive'
                  width={700}
                  height={400}
                  className='rounded-lg'
                />
                <p className='mt-4 text-lg text-gray-700'>
                  Enjoy a user-friendly interface designed for your convenience.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-4 sm:p-3 md:p-6 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden'>
            <button 
              onClick={closeModal} 
              className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg sm:text-base'>
              &times;
            </button>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-3'>
              Welcome to MedEase
            </h2>
            <p className='mb-4 sm:mb-3 md:mb-4 lg:mb-5'>
              Discover how MedEase can transform your healthcare experience. 
              <br /> 
              Get access to detailed hospital information and more with just a few clicks.
            </p>
            <button 
              onClick={closeModal} 
              className='w-full p-3 sm:p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
              Start Exploring
            </button>
          </div>
        </div>
      )}

      {/* Hide Logo Text on Tablet */}
      <div className='absolute top-0 right-0 hidden lg:hidden md:block text-center p-4'>
        <p className='text-lg font-bold text-gray-800'>MedEase</p>
      </div>
    </div>
  );
}

export default Home;
