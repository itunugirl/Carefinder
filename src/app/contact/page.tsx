import Image from 'next/image';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className='contact_container flex min-h-screen'>
      {/* Image Container */}
      <div className='relative flex-1'>
        <div className='flex-1 relative w-full h-full'>
          <Image 
            src="/assets/images/contact-Me-2.png" 
            alt='Contact Image'
            layout="fill"
            objectFit="contain"
            className='absolute inset-0'
          />
        </div>
      </div>
      
      {/* Form Container */}
      <div className='flex-1 flex items-center justify-center p-8 bg-gray-100'>
        <form action="" className='space-y-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg'>
          <input 
            type="text" 
            placeholder='Name and Surname' 
            required
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input 
            type="email" 
            placeholder='Email Address' 
            required
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input 
            type="tel" 
            placeholder='Phone Number (optional)' 
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <textarea 
            placeholder='Message' 
            cols={30} 
            rows={10} 
            required
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>
          <button 
  type="submit"
  className='contact_button w-full h-12 bg-blue-sky text-button-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out'
>
  Send
</button>

        </form>
      </div>
    </div>
  );
}

export default ContactPage;
