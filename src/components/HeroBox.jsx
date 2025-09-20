import Logo from "../assets/uiaid-icon.png";
import SectionImage from "../assets/section1.png";
import {
  PlusCircleIcon,
  PresentationChartBarIcon,
  Square2StackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

function HeroBox() {
  return (
    <>
      <div className="bg-gray-900 rounded-2xl overflow-hidden text-white flex flex-col md:flex-row">
        {/* // Sidebar  */}
        <div className="w-full md:w-[18%] bg-gray-800 p-4 md:p-6">
          <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
            <div className="flex items-center space-x-2">
              <img src={Logo} className="w-5 h-5" />
              <span className="font-semibold">uiAid</span>
            </div>
            <div className="bg-purple-600 flex gap-2 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg cursor-pointer text-xs md:text-sm whitespace-nowrap">
              <PlusCircleIcon className="w-4 mt-1 h-4" />
              New Project
            </div>

            <div className="hidden md:block space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Square2StackIcon className="w-4 h-4" />
                <span>Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PresentationChartBarIcon className="w-4 h-4" />
                <span>Templates</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <WrenchScrewdriverIcon className="w-4 h-4" />
                <span>Tools</span>
              </div>
            </div>
          </div>
        </div>
        {/* mmain div  */}
        <div className="flex-1 flex flex-col p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <span className="text-lg md:text-xl lg:text-2xl font-semibold">
              Generate Articles With AI
            </span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">⚡</span>
            </div>
          </div>
          {/* form div  */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 flex-1">
            <div className="lg:w-[55%]  mb-7 space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
                  Language
                </label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
                  <option>🇺🇸 English (US)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
                  Article Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. the 20 best places to live in the UK"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
                  Focus keyword (seperate with a comma)
                </label>
                <input
                  type="text"
                  placeholder="Add keyword"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
                  Article Subheadings
                </label>
                <input
                  type="text"
                  placeholder="Subheading"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
                />
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 cursor-pointer md:p-3 rounded-lg font-semibold text-sm md:text-base">
                Generate
              </button>
            </div>

            {/* third div  */}
            <div className="lg:w-[45%] mt-4 lg:mt-0">
              <div className="bg-gray-800 rounded-lg p-3 md:p-4 space-y-3 md:space-y-4">
                <h3 className="font-semibold text-base md:text-lg leading-tight">
                  Effortlessly Create High-Quality Articles with Our AI Article
                  Generator
                </h3>
                <div className="space-y-2 text-xs md:text-sm text-gray-300">
                  <p>
                    AI has the potential to revolutionize the way we live and
                    work, from improving healthcare and transportation...
                  </p>
                  <p>
                    These are some significant advantages of electronic payment
                    options and methods...
                  </p>
                  <p className="hidden md:block">
                    AI has the potential to revolutionize the way we live and
                    work, from improving healthcare and transportation...
                  </p>
                </div>
                <div className="text-xs text-gray-500">Nov 19, 2025</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm transition">
                  📝 Edit
                </button>
                <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm transition">
                  📋 Copy
                </button>
                <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm transition">
                  💾 Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBox;
