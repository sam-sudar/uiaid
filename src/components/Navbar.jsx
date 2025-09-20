import Icon from "../assets/uiaid-icon.png";

function Navbar() {
  return (
    <header className=" z-10 bg-transparent flex items-center justify-between px-8 py-6">
      <div className="flex items-center space-x-2">
        <img src={Icon} alt="uiAid Logo" className="w-8 h-8" />
        <span className="text-gray-800 font-semibold text-lg">uiAid</span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="#tools" className="text-gray-600 hover:text-gray-800">
          About
        </a>
        <a href="#work" className="text-gray-600 hover:text-gray-800">
          Work
        </a>
        <a href="#work" className="text-gray-600 hover:text-gray-800">
          Research
        </a>
      </nav>

      <button className="border border-blue-400 text-blue-500 px-4 py-2 cursor-pointer rounded-full hover:bg-blue-50">
        Login
      </button>
    </header>
  );
}

export default Navbar;
