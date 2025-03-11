import { useState } from "react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden p-4 z-10">
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {isOpen ? "❌" : <AlignJustify className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-1 md:left-1/2 mt-[16px] md:mt-[25px]  max-w-55 p-2 bg-slate-500 text-4xl transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 " : "translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 justify-center items-center">
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
