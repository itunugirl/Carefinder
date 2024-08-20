import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About MedEase</title>
        <meta name="description" content="Learn more about MedEase and how we simplify healthcare access in Nigeria." />
      </Head>
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-teal-50">
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <circle cx="20" cy="20" r="20" fill="#E5E7EB" opacity="0.3" />
            <circle cx="80" cy="80" r="20" fill="#F3F4F6" opacity="0.3" />
            <circle cx="40" cy="60" r="30" fill="#E5E7EB" opacity="0.2" />
          </svg>
        </div>

        <div className="container mx-auto p-4 md:p-8 relative z-10 flex flex-col">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              About MedEase
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Empowering Your Healthcare Journey
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <span className="text-blue-600 font-bold">At MedEase,</span> we believe that accessing quality healthcare should be seamless and straightforward. Our platform is designed to bridge the gap between you and essential medical services in Nigeria.
            </p>
          </div>

          {/* What We Do Section */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                What We Do
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                    Find Hospitals
                  </h3>
                  <p className="text-gray-700">
                    Easily locate hospitals in your area with our intuitive search functionality. Enter your location or choose from a list of cities to get relevant results.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                    Export Information
                  </h3>
                  <p className="text-gray-700">
                    Download and save hospital details in a convenient CSV format, perfect for sharing or personal records.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
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
          <section className="relative z-10 bg-gradient-to-r from-blue-100 to-teal-100 p-6 md:p-8 rounded-lg shadow-xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-30"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="text-blue-600">
                <h1 className="text-4xl md:text-5xl font-extrabold">2+</h1>
                <p className="text-gray-700 text-lg md:text-xl">Years of Experience</p>
              </div>
              <div className="text-blue-600">
                <h1 className="text-4xl md:text-5xl font-extrabold">10 K+</h1>
                <p className="text-gray-700 text-lg md:text-xl">Projects Completed</p>
              </div>
              <div className="text-blue-600">
                <h1 className="text-4xl md:text-5xl font-extrabold">15 K+</h1>
                <p className="text-gray-700 text-lg md:text-xl">Satisfied Clients</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
