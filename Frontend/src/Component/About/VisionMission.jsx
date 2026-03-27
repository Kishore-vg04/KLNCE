import React from "react";

const VisionMission = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      
      <div className="sm:p-6 md:p-8">
        
        {/* Heading */}
        <h4 className="font-semibold text-xl sm:text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2">
          Vision & Mission
        </h4>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vision Card */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <h5 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
              👁️ Vision
            </h5>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To become a Centre of Excellence in Technical Education and
              Research in producing competent and ethical professionals to the
              society.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <h5 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
              🎯 Mission
            </h5>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To impart value and need-based curriculum with enriched skill
              development in Engineering, Technology, Management, and
              Entrepreneurship. To nurture character with social concern and
              prepare students for careers in research and industry.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisionMission;