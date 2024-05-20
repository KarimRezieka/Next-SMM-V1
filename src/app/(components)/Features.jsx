import React from "react";

export default function Features() {
  const features = [
    {
      icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 13.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0-12a.75.75 0 110-1.5.75.75 0 010 1.5z",
      title: "Content Creation",
      desc: "Craft compelling posts tailored to your brand's voice and audience preferences.",
    },
    {
      icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 13.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0-12a.75.75 0 110-1.5.75.75 0 010 1.5z",
      title: "Social Media Strategy",
      desc: "Develop a comprehensive strategy to increase engagement and grow your follower base.",
    },
    {
      icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 13.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0-12a.75.75 0 110-1.5.75.75 0 010 1.5z",
      title: "Analytics & Reporting",
      desc: "Monitor performance metrics and provide detailed reports to optimize your social media presence.",
    },
    {
      icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 13.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0-12a.75.75 0 110-1.5.75.75 0 010 1.5z",
      title: "Community Management",
      desc: "Engage with your audience and manage interactions to build a strong community around your brand.",
    },
  ];

  return (
    <div className="relative py-32 bg-white text-gray-800">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
            Do more with less complexity
          </h3>
          <p className="mt-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius, enim ex faucibus purus.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li className="flex gap-x-4" key={idx}>
                <div className="flex-none w-12 h-12 bg-gray-200 text-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-96 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </div>
  );
}
