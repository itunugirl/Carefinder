import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About MedEase</title>
        <meta name="description" content="Learn more about MedEase and how we simplify healthcare access in Nigeria." />
      </Head>
    <div className="container">
      {/* Text Container */}
      <div className="textContainer">
        <h2 className="Blue_gradient subtitle">About MedEase</h2>
        <h1 className="title">
        Empowering Your Healthcare Journey.
        </h1>
        <p className="desc">
        At MedEase, we believe that accessing quality healthcare should be seamless and straightforward. Our platform is designed to bridge the gap between you and essential medical services in Nigeria.
        </p>



        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">
              <strong>Find Hospitals:</strong> Easily locate hospitals in your area with our intuitive search functionality. Enter your location or choose from a list of cities to get relevant results.
            </li>
            <li className="mb-2">
              <strong>Export Information:</strong> Download and save hospital details in a convenient CSV format, perfect for sharing or personal records.
            </li>
            <li className="mb-2">
              <strong>Share Effortlessly:</strong> Share hospital information with others through email or shareable links, ensuring that everyone has access to crucial healthcare resources.
            </li>
          </ul>
        </section>





        <div className="boxes">
          <div className="box">
            <h1 className='Blue_gradient'>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="box">
            <h1 className='Blue_gradient'>10 K+</h1>
            <p>Projects Completed</p>
          </div>
          <div className="box">
            <h1 className='Blue_gradient'>10 K+</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="imgContainer">
        <Image 
          src="/assets/images/healthcare_4.gif" 
          alt="About Image" 
          layout="fill" 
          unoptimized
        />
      </div>
    </div>
    </>
  );
}

export default About;
