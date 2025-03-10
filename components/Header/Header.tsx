"use client";
import TopBar from "./TopBar";
import MiddleHeader from "./MiddleHeader";
import CategoriesDropdown from "./CategoriesDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <header>
      {/* Top Bar */}
      <TopBar />

      {/* Middle Header */}
      <MiddleHeader />

      {/* Categories */}
      <nav className={header ? `bg-gray-300 shadow` : "bg-[transparent] "}>
        <div className="bg-white container mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <CategoriesDropdown />
            <div className="flex-1 flex justify-between px-16 bg-gray-300 shadow">
              <div className="flex items-center justify-between">
                {/* Desktop Menu */}
                <DesktopMenu />

                {/* Mobile Menu */}
                <MobileMenu />
              </div>

              <div className="flex items-center gap-4">
                <HeartIcon className="h-6 w-6 cursor-pointer" />
                <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
