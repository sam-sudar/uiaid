import Graph from "../components/Graph";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import PopularTools from "../sections/PopularTools";

function MainLayout() {
  return (
    <div>
      <div className="relative z-10 bg-gradient-to-br from-pink-100 via-sky-100 to-blue-300">
        <Navbar />
        <Hero />
      </div>
      <PopularTools />
      <HowItWorks />
    </div>
  );
}

export default MainLayout;
