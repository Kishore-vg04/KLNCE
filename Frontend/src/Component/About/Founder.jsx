import React from "react";

const Founder = () => {
  return (
    <div className="w-full p-5 text-left rounded-xl px-4 sm:px-6 lg:px-0">
      
      {/* Heading */}
      <h4 className="font-semibold text-xl sm:text-2xl mb-6 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2">
        Our Founder
      </h4>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">

        {/* Text */}
        <div className="text-center md:text-left">
          <h5 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
            (Late) Thiru K.L.N. Krishnan
          </h5>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            A visionary educationist, industrialist, and a great philanthropist.
            He laid the foundation for K.L.N. College of Engineering with the
            noble vision of bringing quality technical education to the region.
            His unwavering dedication to academics and community service
            continues to inspire the institution.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            He believed that education is the ultimate tool for social
            transformation. Under his foundational leadership, the institution
            grew from its humble beginnings into a sprawling campus,
            establishing a legacy of excellence that endures to this day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;