import React from 'react';
import Navbar from '../Component/Navbar';

const Activities = () => {
    const events = [
        {
            title: "Tech Symposium 2024",
            desc: "Annual national-level technical festival showcasing innovations.",
            tag: "Technical",
            color: "bg-blue-100 text-blue-800"
        },
        {
            title: "Rhythm Cultural Fest",
            desc: "A massive celebration of art, music, dance and cultural talents.",
            tag: "Cultural",
            color: "bg-pink-100 text-pink-800"
        },
        {
            title: "KLNCE Sports Meet",
            desc: "Inter-departmental track, field, and indoor sports competitions.",
            tag: "Sports",
            color: "bg-green-100 text-green-800"
        },
        {
            title: "NSS & YRC Campaigns",
            desc: "Social outreach programs, blood donation camps, and village adoptions.",
            tag: "Outreach",
            color: "bg-yellow-100 text-yellow-800"
        }
    ];

    return (
        <div className=' min-h-screen font-serif pb-16'>
            <Navbar 
              name={"Student Activities"} 
              about={"Beyond the Classroom: Cultivating Holistic Development"} 
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>

                {/* Heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3'>
                        Clubs & Extracurriculars
                    </h2>
                    <hr className='w-16 sm:w-24 border-2 border-purple-600 mx-auto rounded-full' />
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {events.map((evt, idx) => (
                        <div 
                          key={idx} 
                          className='group flex flex-col bg-white shadow-md rounded-xl overflow-hidden 
                                     hover:shadow-2xl transition duration-300 hover:-translate-y-2'
                        >

                            {/* Image */}
                            <div className='w-full h-40 sm:h-44 md:h-48 bg-purple-200 flex items-center justify-center overflow-hidden'>
                                <span className='text-purple-500 font-semibold text-sm'>
                                    Image Placeholder
                                </span>
                            </div>

                            {/* Content */}
                            <div className='p-4 sm:p-5 flex flex-col gap-2'>

                                <span className={`w-fit px-3 py-1 text-xs font-bold rounded-full ${evt.color}`}>
                                    {evt.tag}
                                </span>

                                <h3 className='text-lg sm:text-xl font-bold text-gray-800'>
                                    {evt.title}
                                </h3>

                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    {evt.desc}
                                </p>

                                <button className='mt-3 text-sm sm:text-base text-purple-700 font-semibold 
                                                   hover:text-purple-900 transition duration-200'>
                                    Read More →
                                </button>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Activities;