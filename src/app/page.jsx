import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Hero from "./(components)/Hero";
import Features from "./(components)/Features";
import CTA from "./(components)/CTA";
import Steps from "./(components)/Steps";
import Features2 from "./(components)/Features2";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <CTA/>
      <Steps/>
      <Features2/>
      <Footer/>
    </>
  );
}
