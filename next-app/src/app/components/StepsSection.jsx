// components/StepsSection.jsx
import React from "react";

const StepsSection = ({ steps }) => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative flex-1"
          >
            {/* Circle with line connector */}
            <div className="relative flex items-center justify-center w-full">
              {/* Connector line - only for desktop and not on last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 right-[-50%] top-1/2 h-[1px] bg-gray-300 z-0"></div>
              )}

              {/* Number Circle */}
              <div className="z-10 w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#1C86D1] text-2xl font-semibold text-gray-900 bg-white">
                {step.number.toString().padStart(2, "0")}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mt-4">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-xs mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
