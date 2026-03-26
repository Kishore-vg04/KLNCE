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
      
      <Navbar name={"Engineer Your Future"} about={"From Classroom to Career, Excellence, Innovation & Connections for life"}/>
      <div className='flex justify-center'>
        <button className='px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg active:scale-110 shadow-lg transition duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-800'>
          Contact Us
        </button>
      </div>
      <div className='mt-10 flex justify-center'>
        <div className='w-[100%] h-[400px] overflow-hidden rounded-md shadow-lg relative'>
          <img
            src={images[current]}
            alt="carousel"
            className='w-full h-full object-cover object-center transition duration-700'
          />
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className='absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 px-3 py-1 rounded-full'
          >
            ◀
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className='absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 px-3 py-1 rounded-full'
          >
            ▶
          </button>
        </div>
      </div>
      <div className='my-2 text-center my-8 '>
        <h1 className='text-4xl font-bold'>Latest Events and Announcements</h1>
        <p className='py-2'>Stay connected with our latest events and announcements</p>
        <hr className='w-[50%] mx-auto'/>
        <div className='flex gap-5 justify-center p-4'>
           <div className='flex flex-col items-center gap-6 bg-white/60 shadow-lg p-4 rounded-xl'>
              <h3 className='text-xl font-semibold'>Event 1</h3>
              <div className='h-[400px] w-[350px] overflow-hidden rounded-lg'>
                <img 
                  src={event} 
                  alt="" 
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>
           </div>
           <div className='flex flex-col items-center gap-6 bg-white/60 shadow-lg p-4 rounded-xl'>
              <h3 className='text-xl font-semibold'>Event 1</h3>
              <div className='h-[400px] w-[350px] overflow-hidden rounded-lg'>
                <img 
                  src={event} 
                  alt="" 
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>
           </div>
           <div className='flex flex-col items-center gap-6 bg-white/60 shadow-lg p-4 rounded-xl'>
              <h3 className='text-xl font-semibold'>Event 1</h3>
              <div className='h-[400px] w-[350px] overflow-hidden rounded-lg'>
                <img 
                  src={event} 
                  alt="" 
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>
           </div>
        </div>
        <button className='px-3 py-1 bg-gradient-to-r from-violet-700 to-purple-800 text-white rounded-lg text-lg hover:scale-105 duration-200'>View All Events</button>
      </div>
      <Carousal/>
    </div>
  )
}

export default Home
