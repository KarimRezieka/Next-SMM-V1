import React from "react";

export default function CTA() {
  return (
    <div>
      <section className="py-10 relative bg-blue-600 mt-2 mb-5">
        <div className="relative z-10 max-w-lg mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl md:mx-auto">
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Get Started Today !
            </p>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full"></div>
      </section>
    </div>
  );
}
