import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <section className="py-10 relative bg-blue-600 mt-2 mb-5">
            <div className="relative z-10 max-w-lg mx-auto px-4 md:text-center md:px-8">
              <div className="max-w-xl md:mx-auto">
                <p className="text-white text-3xl font-bold sm:text-3xl">
                  Request a Free Consultation
                </p>
              </div>
            </div>
            <div className="absolute top-0 w-full h-full"></div>
          </section>
          <div className="mt-16">
            <div className="mt-16 sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <img
                  src="./images/10_h.jpg"
                  alt="Logo"
                  className="w-16 h-16" // Tailwind classes for width and height
                />
              </div>

              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                Copyright &copy; 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
