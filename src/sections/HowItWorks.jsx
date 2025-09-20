import Table from "../components/Table";
import Graph from "../components/Graph";
import FeatureList from "../components/FeatureList";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Circle from "../assets/Purple_Circle_2.png";

import Editor from "../components/Editor";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features1 = [
  "Include any SEO keywords you want to rank for",
  "Customize your copy with tone and perspective options",
  "Choose from 25+ languages",
];

const features2 = [
  "Review generated content before publishing",
  "Export to multiple formats (PDF, Word, HTML)",
  "Publish directly to your website or blog",
];

export default function HowItWorks() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "elastic.inOut(1, 0.75)",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      boxRef2.current,
      { x: -100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "elastic.inOut(1, 0.75)",
        scrollTrigger: {
          trigger: boxRef2.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
      id="work"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <header className="my-10">
          <h1 className="text-3xl lg:text-5xl  font-base text-center text-gray-900 mb-8 lg:mb-16">
            How it works
          </h1>
        </header>
        {/* table Section  */}
        <div
          ref={boxRef}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-24"
        >
          <div className="space-y-6 lg:space-y-8">
            <FeatureList
              title="Enter your post's title & keyword"
              description="Simply provide our AI writer with 1-2 sentences on what to write, and it'll understand and start writing for you."
              items={features1}
            />
            {/* editor box  */}
            <Editor />
            {/* // bts circle  */}
            <img
              src={Circle}
              className="hidden sm:block absolute bottom-15 right-115 -z-1 w-64 h-64"
              alt="Decorative circle"
            />
          </div>
          <Table />
        </div>

        {/* graph section  */}
        <div
          ref={boxRef2}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24"
        >
          <FeatureList
            title="Review, export and publish copy"
            description="Simply provide our AI writer with 1-2 sentences on what to write, and it'll understand and start writing for you."
            items={features2}
          />
          <Graph />
        </div>
      </div>
    </div>
  );
}
