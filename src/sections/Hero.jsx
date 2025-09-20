import { useRef } from "react";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroBox from "../components/HeroBox";
import Circle from "../assets/Purple_Circle_2.png";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* // main body */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 md:mb-90 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Effortlessly Create High-
            <br />
            Quality Articles with Our AI
            <br />
            Article Generator
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            AI has the potential to revolutionize the way we live and work, from
            improving healthcare and transportation to enhancing the way we
            create content and communicate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Get Started
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 hover:border-gray-400 font-semibold text-lg transition-all duration-300 w-full sm:w-auto">
              Explore
            </button>
          </div>
        </div>

        <div className="block sm:hidden">
          <div
            ref={boxRef}
            className="bg-white rounded-xl p-2 shadow-lg border border-gray-100 max-w-sm mx-auto"
          >
            <HeroBox />
          </div>
        </div>
      </main>
      {/* circles  */}
      <img
        src={Circle}
        className="hidden sm:block absolute bottom-135 left-20"
        alt="Decorative circle"
      />
      <img
        src={Circle}
        className="hidden sm:block absolute bottom-55 right-20 z-0 w-64 h-64"
        alt="Decorative circle"
      />
      {/* // white second div  */}
      <div className="hidden sm:block">
        <div className="relative z-20 bg-white w-full h-[300px]"></div>
        <div
          ref={boxRef}
          className="z-100 absolute bottom-35 left-0 mx-45 backdrop-blur bg-white/50 rounded-xl border border-white/30 shadow-lg rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-2xl border border-gray-100"
        >
          <HeroBox />
        </div>
      </div>
    </div>
  );
}
