import React from 'react'

const Program = () => {
  const ugPrograms = [
    "B.E. Mechanical Engineering",
    "B.E. Electrical and Electronics Engineering",
    "B.E. Electronics and Communication Engineering",
    "B.E. Computer Science and Engineering",
    "B.Tech. Information Technology",
    "B.Tech. Artificial Intelligence and Data Science"
  ];

  const pgPrograms = [
    "M.E. CAD / CAM",
    "M.E. Communication Systems",
    "M.E. Computer Science and Engineering",
    "Master of Business Administration (MBA)",
    "Master of Computer Applications (MCA)"
  ];

  return (
    <div className='w-[100%] text-left rounded-xl'>
      <h4 className='font-semibold text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2'>
        Academic Programs
      </h4>

      <p className='text-gray-700 leading-relaxed tracking-normal mb-8'>
        The institution offers a diverse range of undergraduate (B.E./B.Tech) and postgraduate
        (M.E./MBA/MCA) programs, crafted to align with modern industrial frameworks.
      </p>

      <div className='mb-8'>
        <h5 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
          <span className='w-2 h-6 bg-purple-600 rounded-full inline-block'></span>
          Undergraduate Programs (UG)
        </h5>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 pl-2'>
          {ugPrograms.map((prog, idx) => (
            <li key={idx} className='flex items-center gap-2 text-gray-700'>
              <span className='text-purple-500'>✔</span> {prog}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
          <span className='w-2 h-6 bg-purple-600 rounded-full inline-block'></span>
          Postgraduate Programs (PG)
        </h5>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 pl-2'>
          {pgPrograms.map((prog, idx) => (
            <li key={idx} className='flex items-center gap-2 text-gray-700'>
              <span className='text-purple-500'>✔</span> {prog}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Program