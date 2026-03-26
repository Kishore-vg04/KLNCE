import React from 'react'

const Overview = () => {
  const stats = [
    { label: "Year Est.", value: "1994" },
    { label: "Campus Size", value: "53.8 Acres" },
    { label: "Faculty", value: "250+" },
    { label: "Alumni", value: "15,000+" }
  ];

  return (
    <div className='w-[100%] text-left rounded-xl'>
      <h4 className='font-semibold text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2'>
        Institution Overview
      </h4>
      <p className='text-gray-700 leading-relaxed tracking-normal mb-6'>
        K.L.N. College of Engineering is a premier self-financing co-educational institution.
        Approved by AICTE and affiliated to Anna University, Chennai, the college is a recognized
        research center and boasts high academic standards with NBA and NAAC accreditations.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
        {stats.map((stat, idx) => (
          <div key={idx} className='bg-purple-100 p-4 rounded-xl text-center shadow-sm'>
            <div className='text-3xl font-bold text-purple-800 mb-1'>{stat.value}</div>
            <div className='text-sm text-gray-600 font-medium tracking-wide uppercase'>{stat.label}</div>
          </div>
        ))}
      </div>

      <h5 className='font-semibold text-xl mb-3 text-gray-800'>
        Quality Policy
      </h5>
      <p className='text-gray-700 leading-relaxed tracking-normal'>
        We are committed to providing quality education in Engineering, Technology, and Management
        along with skill development, ethical values, and social responsibilities. We ensure
        continuous improvement in teaching and learning processes with advanced infrastructure and
        industrial collaboration.
      </p>
    </div>
  )
}

export default Overview