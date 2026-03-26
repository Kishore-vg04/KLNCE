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
        <div className='bg-gray-100 min-h-screen font-serif pb-16'>
            <Navbar name={"Student Activities"} about={"Beyond the Classroom: Cultivating Holistic Development"} />

            <div className='max-w-7xl mx-auto px-4 mt-12'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-3'>Clubs & Extracurriculars</h2>
                    <hr className='w-24 border-2 border-purple-600 mx-auto rounded-full' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>
                    {events.map((evt, idx) => (
                        <div key={idx} className='flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                            <div className='w-full h-48 bg-purple-200 flex items-center justify-center'>
                                <span className='text-purple-400 font-semibold'>Image Placeholder</span>
                            </div>
                            <div className='p-6 flex flex-col items-start w-full gap-2'>
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${evt.color}`}>
                                    {evt.tag}
                                </span>
                                <h3 className='text-xl font-bold text-gray-800 mt-2'>{evt.title}</h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>{evt.desc}</p>
                                <button className='mt-4 text-purple-700 font-semibold hover:text-purple-900 duration-200'>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
