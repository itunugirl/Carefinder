// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className='relative w-full h-[400px] md:h-[600px]'>
      <Slider {...settings}>
        <div className='w-full h-full'>
          <Image 
            src='/assets/images/slide1.jpg' 
            alt='Slide 1' 
            layout='fill' 
            objectFit='cover' 
            className='rounded-lg'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold'>
            Discover Healthcare Excellence
          </div>
        </div>
        <div className='w-full h-full'>
          <Image 
            src='/assets/images/slide2.jpg' 
            alt='Slide 2' 
            layout='fill' 
            objectFit='cover' 
            className='rounded-lg'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold'>
            Find Hospitals Easily
          </div>
        </div>
        <div className='w-full h-full'>
          <Image 
            src='/assets/images/slide3.jpg' 
            alt='Slide 3' 
            layout='fill' 
            objectFit='cover' 
            className='rounded-lg'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold'>
            Seamless Data Export
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
