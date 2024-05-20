import React from "react";

const steps = [
  {
    title: "Research",
    description:
      "We learn what your customers want and how they behave/interact with your brand.",
    icon: "/images/seo.png", // Replace with the actual path to your icons
  },
  {
    title: "Planning",
    description:
      "We align our research with your business goals and capabilities, to attract paying customers to you.",
    icon: "./images/task.png",
  },
  {
    title: "Implement",
    description:
      "We identify and create promotion strategies that will get your message out to a qualified audience.",
    icon: "/images/innovation.png",
  },
  {
    title: "Measure",
    description:
      "Prove how your investment is helping you grow and to strive towards your business goals.",
    icon: "/images/speedometer.png",
  },
  {
    title: "Optimize",
    description:
      "Refine our strategies that increase the productivity of input > output. Then double down on areas that show promising results.",
    icon: "/images/search-engine-optimization.png",
  },
];

const Steps = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-white text-gray-800 mt-6 mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border border-white rounded-lg shadow-md bg-whie max-w-xs"
          >
            <img
              src={step.icon}
              alt={`${step.title} icon`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-blue-500 font-bold">Step {index + 1}</h3>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
