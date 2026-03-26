import React from 'react';
import Navbar from '../Component/Navbar';

const Resources = () => {
    const resources = [
        {
            title: "Central Library",
            desc: "An extensive collection of 50,000+ books, IEEE journals, magazines, and digital resources for all departments.",
            icon: "📚"
        },
        {
            title: "e-Learning Portals",
            desc: "Access to NPTEL lectures, SWAYAM courses, and exclusive internal digital course materials.",
            icon: "💻"
        },
        {
            title: "Advanced Laboratories",
            desc: "State-of-the-art computational and core engineering labs equipped with the latest technology tools.",
            icon: "🔬"
        },
        {
            title: "Research Centers",
            desc: "Dedicated hubs for specialized research and development with industry-backed funding.",
            icon: "🚀"
        }
    ];

    return (
        <div className='bg-gray-100 min-h-screen font-serif'>
            <Navbar 
              name={"Campus Resources"} 
              about={"Empowering Students with World-Class Academic Facilities"} 
            />

            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>

                {/* Heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4'>
                        Discover Our Facilities
                    </h2>

                    <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
                        We provide our students and faculty with comprehensive resources tailored to foster an
                        innovative, deeply intellectual environment.
                    </p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>

                    {resources.map((res, idx) => (
                        <div 
                          key={idx} 
                          className='group bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md border-t-4 border-purple-600 
                                     hover:-translate-y-2 hover:shadow-xl transition duration-300'
                        >

                            {/* Icon */}
                            <div className='text-4xl sm:text-5xl mb-4'>
                                {res.icon}
                            </div>

                            {/* Title */}
                            <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3'>
                                {res.title}
                            </h3>

                            {/* Description */}
                            <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                                {res.desc}
                            </p>

                            {/* Button */}
                            <button className='mt-5 text-sm sm:text-base text-purple-700 font-semibold 
                                               flex items-center gap-2 group-hover:gap-3 transition-all duration-300'>
                                Explore More →
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Resources;