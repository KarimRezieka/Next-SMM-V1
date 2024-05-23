import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Hero from "./(components)/Hero";
import Features from "./(components)/Features";
import CTA from "./(components)/CTA";
import Steps from "./(components)/Steps";
import Features2 from "./(components)/Features2";
import Footer from "./(components)/Footer";
import Footer2 from "./(components)/Footer2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <CTA />
      <Steps />
      <div id="services">
        <Features2 />
      </div>
      <div id="contact">
        <Footer2 />
      </div>
    </>
  );
}
