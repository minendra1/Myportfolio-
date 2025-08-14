import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - centered for all screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative`} // Added relative for positioning circle
          >
            {/* Timeline Circle - Always centered on the line */}
            <div className={`absolute top-0 transform -translate-y-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10
                left-1/2 -ml-6 sm:-ml-8`} // left-1/2 -ml-half-width to center it
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section - Adjusted for consistent gap and no overlap */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:ml-0" // For even indices, align left on larger screens
                    : "sm:ml-auto sm:mr-0" // For odd indices, align right on larger screens
                }
                ${
                  index % 2 === 0
                    // On large screens for even items (left side): push left from the center, creating a right margin
                    ? "sm:pr-4 sm:mr-[calc(50%_-_(var(--timeline-circle-size)/2)_-_var(--gap-size))]"
                    // On small screens, ensure it's to the right of the circle
                    : "sm:pl-4 sm:ml-[calc(50%_-_(var(--timeline-circle-size)/2)_-_var(--gap-size))]"
                }
                ml-[calc(var(--timeline-circle-size)_+_var(--gap-size))] sm:ml-auto sm:mr-auto
                transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text - reverse order for left-aligned content */}
              <div className={`flex items-center space-x-6 ${index % 2 === 0 ? "sm:flex-row-reverse sm:space-x-reverse" : ""}`}>
                {/* School Logo/Image */}
                <div className="w-32 h-15 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;