import React from "react";

export default function Footer2() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Anything unclear or{" "}
              <span className="font-light">need help ?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Relax, we are ready to support 24/7 for you
            </p>

            <p
              href="#"
              className="mt-8 inline-block  border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600   focus:outline-none focus:ring active:bg-indigo-500"
            >
              contact@f9agency.com
            </p>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <p className="text-gray-500 transition hover:opacity-75">
                  {" "}
                  Terms & Conditions{" "}
                </p>
              </li>

              <li>
                <p className="text-gray-500 transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </p>
              </li>

              <li>
                <p className="text-gray-500 transition hover:opacity-75">
                  {" "}
                  Cookies{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
