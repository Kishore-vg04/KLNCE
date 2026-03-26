import React from 'react'

const Founder = () => {
  return (
    <div className='w-[100%] text-left rounded-xl'>
      <h4 className='font-semibold text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2'>
        Our Founder
      </h4>
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='w-48 h-56 bg-purple-100 rounded-lg shadow-md flex-shrink-0 flex items-center justify-center border-2 border-purple-300 overflow-hidden'>
          {/* Placeholder for Founder Image */}
          <span className='text-purple-400 font-medium text-center px-4'>Founder <br /> Photo</span>
        </div>
        <div>
          <h5 className='text-xl font-bold text-gray-800 mb-2'>
            (Late) Thiru K.L.N. Krishnan
          </h5>
          <p className='text-gray-700 leading-relaxed tracking-normal mb-4'>
            A visionary educationist, industrialist, and a great philanthropist. He laid the foundation
            for K.L.N. College of Engineering with the noble vision of bringing quality technical
            education to the region. His unwaivering dedication to academics and community service
            Continues to inspire the institution.
          </p>
          <p className='text-gray-700 leading-relaxed tracking-normal'>
            He believed that education is the ultimate tool for social transformation. Under his
            foundational leadership, the institution grew from its humble beginnings into a sprawling
            campus, establishing a legacy of excellence that endures to this day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Founder