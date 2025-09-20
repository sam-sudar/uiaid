import {
  PencilSquareIcon,
  SparklesIcon,
  DocumentTextIcon,
  ClockIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Card from "../components/Card";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tools = [
  {
    id: 1,
    title: "AI Article Writer",
    description:
      "Generate high-quality articles on any topic with our advanced AI technology.",
    icon: PencilSquareIcon,
    color: "bg-blue-200 text-blue-600",
  },
  {
    id: 2,
    title: "Blog Post Generator",
    description:
      "Create engaging blog posts that capture your audience's attention instantly.",
    icon: DocumentTextIcon,
    color: "bg-green-200 text-green-600",
  },
  {
    id: 3,
    title: "Content Optimizer",
    description:
      "Optimize your content for SEO and readability with intelligent suggestions.",
    icon: SparklesIcon,
    color: "bg-purple-200 text-purple-600",
  },
  {
    id: 4,
    title: "Quick Generator",
    description:
      "Generate content in seconds, not hours. Perfect for tight deadlines.",
    icon: ClockIcon,
    color: "bg-orange-200 text-orange-600",
  },
  {
    id: 5,
    title: "Multi-Language",
    description:
      "Create content in multiple languages to reach a global audience.",
    icon: GlobeAltIcon,
    color: "bg-indigo-200 text-indigo-600",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description:
      "Track your content performance with detailed analytics and insights.",
    icon: ChartBarIcon,
    color: "bg-pink-200 text-pink-600",
  },
];

export default function PopularTools() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section id="tools" className="section-padding" ref={boxRef}>
      <div className="py-20 px-20 bg-gradient-to-br from-pink-100 via-green-100 to-emerald-200">
        {/* header  */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-base text-gray-900 mb-4">
            Most Popular Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most-used AI tools that help content creators,
            marketers, and businesses generate high-quality content
            effortlessly.
          </p>
        </header>

        {/* tools Card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((feature) => (
            <Card key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
