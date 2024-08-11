import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex gap-[80px]'>
      <div className='flex flex-col gap-[20px] flex-1'>
        <h1 className='text-[70px]'>
          Simplify Your Healthcare Journey with MedEase.
        </h1>
        <h3 className='home_subtitle text-[40px] Blue_gradient'>
          Find, export, and share hospital information effortlessly.
        </h3>
        <p className='home_desc text-[20px]'>
          MedEase simplifies healthcare access in Nigeria by helping users find, export, and share hospital information. Our user-friendly platform ensures you have all necessary hospital details at your fingertips, enhancing your healthcare experience.
        </p>
        <div className='home_buttons flex gap-[30px]'>
          <button className='home_button p-[12px] min-w-[140px] cursor-pointer border-none rounded-[6px] bg-{blue} text-[#your-text-color]'>
            Get Started
          </button>
          <button className='home_button p-[12px] min-w-[140px] cursor-pointer border-none rounded-[6px] bg-[black] text-[white]'>
            Learn More
          </button>
        </div>
      </div>
      <div className='flex-1 relative w-full h-[500px]'>
        <Image 
          src='/assets/images/healthCare-3.gif' 
          alt='Healthcare Animation' 
          layout='fill' 
          className='object-cover'
          unoptimized
        />
      </div>
    </div>
  )
}

export default Home;
