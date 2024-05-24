import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <section class="relative flex items-center w-full bg-white">
        <div class="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div class="relative items-center gap-12 m-auto lg:inline-flex">
                <div class="max-w-xl text-center lg:text-left">
                  <div>
                    <p class="text-3xl font-medium md:text-6xl text-slate-900">
                      Transform Your{" "}
                      <span class="text-indigo-500">Social Media</span> Presence
                    </p>
                    <p class="mt-4 text-lg tracking-tight text-slate-500 lg:text-xl">
                      Boost engagement, drive traffic, and grow your brand with
                      our comprehensive social media management solutions
                    </p>
                  </div>
                </div>
              </div>
              <div class="block w-full mt-12 lg:mt-0">
                <img
                  alt="hero"
                  class="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
                  src="/images/hero3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="font-semibold text-sm text-gray-600 text-center uppercase mb-4">
          Partnering with leading business platforms, such as
          </h3>
          <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
              {/* LOGO 1 */}
              <Link href="https://zapier.com/">
                <li>
                  <img src="/images/1.png" alt="" />
                </li>
              </Link>
              {/* LOGO 2 */}
              <Link href="https://www.hubspot.com/">
                <li>
                  <img src="/images/2.png" alt="" />
                </li>
              </Link>

              {/* LOGO 3 */}
              <Link href="https://theytlab.com/">
                <li>
                  <h1 class="font-bold text-2xl">
                    THE<span class="text-green-500">YT</span>LAB
                  </h1>
                </li>
              </Link>
              {/* LOGO 4 */}
              <Link href="https://herow.io/">
                <li>
                  <h1 class="font-bold text-2xl">Herow</h1>
                </li>
              </Link>
              {/* LOGO 5 */}
              <Link href="https://workspace.google.com/">
                <li>
                  <img src="/images/5.png" alt="" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
