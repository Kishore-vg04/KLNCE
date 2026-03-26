import React from 'react';
import Navbar from '../Component/Navbar';

const Placement = () => {
    const recruiters = [
        "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho", "Accenture", "Capgemini"
    ];

    return (
        <div className='bg-gray-100 min-h-screen font-serif'>
            <Navbar 
              name={"Placement Cell"} 
              about={"Bridging the Gap Between Campus & Corporate"} 
            />

            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>

                {/* Highlights Section */}
                <div className='bg-white rounded-xl shadow-md p-5 sm:p-8 mb-10'>

                    <h2 className='text-2xl sm:text-3xl font-bold text-purple-800 mb-8 text-center border-b-2 border-purple-200 pb-3 w-fit mx-auto'>
                        Placement Highlights 2024
                    </h2>

                    {/* Stats */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-10'>

                        <div className='bg-gradient-to-tr from-purple-100 to-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition'>
                            <div className='text-3xl sm:text-4xl font-extrabold text-purple-700 mb-2'>92%</div>
                            <div className='text-gray-600 font-medium text-sm sm:text-base'>Placement Rate</div>
                        </div>

                        <div className='bg-gradient-to-tr from-purple-100 to-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition'>
                            <div className='text-3xl sm:text-4xl font-extrabold text-purple-700 mb-2'>24 LPA</div>
                            <div className='text-gray-600 font-medium text-sm sm:text-base'>Highest Package</div>
                        </div>

                        <div className='bg-gradient-to-tr from-purple-100 to-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition'>
                            <div className='text-3xl sm:text-4xl font-extrabold text-purple-700 mb-2'>100+</div>
                            <div className='text-gray-600 font-medium text-sm sm:text-base'>Top Recruiters</div>
                        </div>

                    </div>

                    {/* Recruiters */}
                    <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center md:text-left'>
                        Our Top Recruiters
                    </h3>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        {recruiters.map((company, idx) => (
                            <div 
                              key={idx} 
                              className='bg-gray-50 flex items-center justify-center p-4 rounded-lg border border-gray-200 
                                         shadow-sm hover:shadow-md hover:bg-white transition duration-300 hover:-translate-y-1'
                            >
                                <span className='font-bold text-lg sm:text-xl text-gray-500 hover:text-purple-600'>
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className='bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-lg p-6 sm:p-10 text-white text-center'>
                    
                    <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
                        Ready to Start Your Career?
                    </h3>

                    <p className='text-sm sm:text-lg mb-6'>
                        Join us and get trained by industry experts to land your dream job.
                    </p>

                    <button className='bg-white text-purple-800 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition'>
                        Contact Placement Office
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Placement;