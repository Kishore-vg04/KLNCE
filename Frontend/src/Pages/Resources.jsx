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
            <Navbar name={"Campus Resources"} about={"Empowering Students with World-Class Academic Facilities"} />

            <div className='max-w-6xl mx-auto px-4 py-12'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-purple-800 mb-4'>Discover Our Facilities</h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        We provide our students and faculty with comprehensive resources tailored to foster an
                        innovative, deeply intellectual environment.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {resources.map((res, idx) => (
                        <div key={idx} className='bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600 hover:-translate-y-2 transition-transform duration-300'>
                            <div className='text-5xl mb-4'>{res.icon}</div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-3'>{res.title}</h3>
                            <p className='text-gray-600 leading-relaxed'>{res.desc}</p>
                            <button className='mt-6 text-purple-700 font-semibold hover:underline flex items-center gap-2'>
                                Explore More <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources;
