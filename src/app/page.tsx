"use client"; // Ensure this is at the top of the file

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegLightbulb } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


// Dynamically import components
const About = dynamic(() => import('@app/about/page'), { ssr: false });
const Services = dynamic(() => import('@app/services/page'), { ssr: false });
const Pricing = dynamic(() => import('@app/pricing/page'), { ssr: false });
const FAQ = dynamic(() => import('@app/FAQ/page'), {ssr: false}); 
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleStartExploring = () => {
    closeModal();
    router.push('/signup');
  };

  return (
    <div className='flex flex-col p-4 sm:p-6 md:p-8 lg:p-12'>
      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-6 sm:gap-4 mb-12'>
        {/* Text Content */}
        <div className='flex flex-col gap-6 md:gap-8 flex-1'>
          <h1 
            data-aos="fade-up"
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4 sm:mb-5 md:mb-6 lg:mb-8'>
            Simplify Your Healthcare Journey with MedEase
          </h1>
          <h3 
            data-aos="fade-up"
            data-aos-delay="200"
            className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-3 md:mb-4 lg:mb-6'>
            Find, export, and share hospital information effortlessly
          </h3>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed'>
            MedEase simplifies healthcare access in Nigeria by helping users find, export, and share hospital information. Our user-friendly platform ensures you have all necessary hospital details at your fingertips, enhancing your healthcare experience.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2'>
            <button 
              onClick={openModal} 
              className='p-3 sm:p-2 min-w-[140px] cursor-pointer border-none rounded bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg'>
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='relative hidden md:block w-full md:w-1/2 h-56 sm:h-64 md:h-80 lg:h-[400px]'>
          <Image 
            src='https://i.postimg.cc/ZK0cLWYh/healthcare-3.gif' 
            alt='Healthcare Animation' 
            layout='fill' 
            className='object-cover'
          />
        </div>
      </div>

      {/* About Section */}
      <section 
        id="about" 
        data-aos="zoom-out" 
        data-aos-delay="200"
        className='relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-12 px-6 sm:px-8 md:px-10 lg:px-12 rounded-lg shadow-lg overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-30'></div>
        <div className='relative max-w-4xl mx-auto z-10'>
          <div className='flex items-center mb-6'>
            <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4'>
              <FaRegLightbulb className='w-8 h-8'/>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800'>
              Welcome to MedEase
            </h2>
          </div>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-8'>
            MedEase is dedicated to making healthcare accessible and straightforward. Our platform offers a seamless way to find, export, and share comprehensive hospital information. With a focus on user experience, we ensure that healthcare details are always within your reach, helping you make informed decisions and improving your overall healthcare journey.
          </p>
          <div className='flex justify-center'>
            <a 
              href='#' 
              data-aos="fade-up" 
              data-aos-delay="400"
              className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg'>
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500'>
          <div 
            className={`bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden transition-opacity duration-500`}
          >
            <button 
              onClick={closeModal} 
              aria-label="Close Modal"
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
              onClick={handleStartExploring} 
              className='w-full p-3 sm:p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
              Start Exploring
            </button>
          </div>
        </div>
      )}

      {/* Render the About, Services, and Pricing components */}
      <About />
      <Services />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
