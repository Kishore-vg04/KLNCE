import { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar'
import Carousal from '../Component/Carousel'
import clg1 from '../assets/clg.JPG'
import clg2 from '../assets/clg2.JPG'
import clg3 from '../assets/clg3.JPG'
import clg4 from '../assets/clg4.JPG'
import event from '../assets/event1.jpg'

const Home = () => {

  const images = [clg1, clg2, clg3, clg4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='font-serif'>

      <Navbar 
        name={"Engineer Your Future"} 
        about={"From Classroom to Career, Excellence, Innovation & Connections for life"}
      />

      {/* Contact Button */}
      <div className='flex justify-center px-4'>
        <button className='px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm sm:text-lg active:scale-110 shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-800'>
          Contact Us
        </button>
      </div>

      {/* Carousel */}
      <div className='mt-8 flex justify-center px-4'>
        <div className='w-full max-w-6xl h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-md shadow-lg relative'>
          <img
            src={images[current]}
            alt="carousel"
            className='w-full h-full object-cover transition duration-700'
          />

          {/* Left Button */}
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className='absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/50 px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base'
          >
            ◀
          </button>

          {/* Right Button */}
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className='absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/50 px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base'
          >
            ▶
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className='text-center my-10 px-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          Latest Events and Announcements
        </h1>

        <p className='py-2 text-sm sm:text-base'>
          Stay connected with our latest events and announcements
        </p>

        <hr className='w-2/3 sm:w-1/2 mx-auto mb-6'/>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

          {[1,2,3].map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-4 bg-white/60 shadow-lg p-4 rounded-xl'>
              
              <h3 className='text-lg sm:text-xl font-semibold'>Event {item}</h3>

              <div className='h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-lg'>
                <img 
                  src={event} 
                  alt="event"
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <button className='mt-6 px-4 py-2 bg-gradient-to-r from-violet-700 to-purple-800 text-white rounded-lg text-sm sm:text-lg hover:scale-105 duration-200'>
          View All Events
        </button>
      </div>

      <Carousal/>

    </div>
  )
}

export default Home