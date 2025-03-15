import { useState } from "react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex justify-center z-30 ">
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-blue-700">
        {isOpen ? "❌" : <AlignJustify className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0  mt-[50px] md:mt-[60px] bg-slate-500 text-4xl transform transition-transform duration-300 p-4 z-20 ${
          isOpen
            ? "translate-x-0 min-h-screen min-w-screen "
            : "-translate-x-full md:-translate-x-[150%] min-h-screen min-w-screen z-20"
        }`}
      >
        <nav className="flex flex-col gap-4 justify-center items-center z-20">
          <Link
            href="/"
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/layout"
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Layout
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/bonus"
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Bonus Page
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
