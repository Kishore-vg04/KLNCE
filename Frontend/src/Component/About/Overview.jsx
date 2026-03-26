import React from "react";

const Overview = () => {
  const stats = [
    { label: "Year Est.", value: "1994" },
    { label: "Campus Size", value: "53.8 Acres" },
    { label: "Faculty", value: "250+" },
    { label: "Alumni", value: "15,000+" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">

      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8">

        {/* Heading */}
        <h4 className="font-semibold text-xl sm:text-2xl mb-4 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2">
          Institution Overview
        </h4>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          K.L.N. College of Engineering is a premier self-financing co-educational
          institution approved by AICTE and affiliated to Anna University, Chennai.
          The college is a recognized research center with NBA and NAAC accreditations,
          ensuring high academic standards.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 sm:p-5 rounded-xl 
                         text-center shadow-sm hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-800 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Policy */}
        <div>
          <h5 className="font-semibold text-lg sm:text-xl mb-3 text-gray-800">
            Quality Policy
          </h5>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            We are committed to providing quality education in Engineering,
            Technology, and Management along with skill development, ethical
            values, and social responsibility. Continuous improvement in
            teaching and learning processes is ensured through advanced
            infrastructure and strong industry collaboration.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Overview;