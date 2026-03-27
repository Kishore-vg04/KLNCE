import React from "react";

const Program = () => {
  const ugPrograms = [
    "B.E. Mechanical Engineering",
    "B.E. Electrical and Electronics Engineering",
    "B.E. Electronics and Communication Engineering",
    "B.E. Computer Science and Engineering",
    "B.Tech. Information Technology",
    "B.Tech. Artificial Intelligence and Data Science",
  ];

  const pgPrograms = [
    "M.E. CAD / CAM",
    "M.E. Communication Systems",
    "M.E. Computer Science and Engineering",
    "Master of Business Administration (MBA)",
    "Master of Computer Applications (MCA)",
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">

      <div className="sm:p-6 md:p-8">

        {/* Heading */}
        <h4 className="font-semibold text-xl sm:text-2xl mb-4 text-purple-800 tracking-wide border-b-2 border-purple-200 pb-2">
          Academic Programs
        </h4>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          The institution offers a diverse range of undergraduate (B.E./B.Tech)
          and postgraduate (M.E./MBA/MCA) programs aligned with modern industry
          standards and technological advancements.
        </p>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* UG Programs */}
          <div className="bg-purple-50 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              Undergraduate Programs
            </h5>

            <ul className="space-y-2">
              {ugPrograms.map((prog, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm sm:text-base text-gray-700 hover:text-purple-700 transition"
                >
                  <span className="text-purple-500 mt-1">✔</span>
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* PG Programs */}
          <div className="bg-purple-50 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              Postgraduate Programs
            </h5>

            <ul className="space-y-2">
              {pgPrograms.map((prog, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm sm:text-base text-gray-700 hover:text-purple-700 transition"
                >
                  <span className="text-purple-500 mt-1">✔</span>
                  {prog}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Program;