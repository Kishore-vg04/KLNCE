import React from 'react'

const Governance = () => {
  const members = [
    { name: "Er. K.N.K. Karthik", role: "President" },
    { name: "Dr. K.N.K. Ganesh", role: "Secretary & Correspondent" },
    { name: "Shri. P.K. Mothilal", role: "Treasurer" },
    { name: "Shri. K.B. Radhakrishnan", role: "Vice President" },
    { name: "Shri. G.R. Radhakrishnan", role: "Joint Secretary" },
    { name: "Dr. A.V. Ram Prasad", role: "Principal" }
  ];

  return (
    <div className='w-[100%] text-left rounded-xl'>
      <h4 className='font-semibold text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2'>
        Governance & Leadership
      </h4>
      <p className='text-gray-700 leading-relaxed tracking-normal mb-8'>
        The strategic management and administration of K.L.N. College of Engineering is steered by an
        experienced internal executive committee. Together, they uphold the institutional values and
        drive the mission of delivering top-tier technical education.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {members.map((member, idx) => (
          <div key={idx} className='bg-white border-l-4 border-purple-600 shadow-sm p-4 rounded-r-lg hover:shadow-md transition-shadow duration-300'>
            <h5 className='text-lg font-bold text-gray-800'>{member.name}</h5>
            <p className='text-purple-600 font-medium'>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Governance