"use client";
import { useState } from "react";

export default function Footer2() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Anything unclear or <span className="font-light">need help?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Relax, we are ready to support 24/7 for you
            </p>

            <p
              href="#"
              className="mt-8 inline-block px-12 py-3 text-sm font-medium text-indigo-600 focus:outline-none focus:ring"
            >
              contact@f9agency.com
            </p>
          </div>
          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <p
                  className="text-gray-500 transition hover:opacity-75 cursor-pointer"
                  onClick={togglePopup}
                >
                  services
                </p>
              </li>
            </ul>

            {isPopupVisible && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={togglePopup}
                ></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 shadow-lg z-50">
                  The services from our specialists at F9Agency are designed to
                  help business owners and in-house marketing teams overcome
                  complex growth marketing challenges, using best-in-class SMM
                  techniques to achieve business growth.
                </div>
              </>
            )}
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} F9Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
