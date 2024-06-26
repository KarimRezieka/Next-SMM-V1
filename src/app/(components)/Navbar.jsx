"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block " href="#">
                <h1 className="font-bold uppercase">
                  <span className="text-indigo-500">F9</span>
                  agency
                </h1>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <button
                      className="block font-semibold text-black transition hover:text-gray-500/75 cursor-pointer"
                      onClick={() => scrollToSection("features")}
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      className="block font-semibold text-black transition hover:text-gray-500/75 cursor-pointer"
                      onClick={() => scrollToSection("services")}
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      className="block font-semibold text-black transition hover:text-gray-500/75 cursor-pointer"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="space-y-4 px-4 pb-4 text-sm">
              <li>
                <button
                  className="font-semibold block text-black transition hover:text-gray-500/75 cursor-pointer"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  className="font-semibold block text-black transition hover:text-gray-500/75 cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="block font-semibold text-black transition hover:text-gray-500/75 cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
