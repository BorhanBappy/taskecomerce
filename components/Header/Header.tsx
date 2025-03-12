"use client";
import TopBar from "./TopBar";
import MiddleHeader from "./MiddleHeader";
import CategoriesDropdown from "./CategoriesDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ShopingCartIcon from "./ShopingCartIcon";

const Header = () => {
  const [header, setHeader] = useState(false);

  // Calculate total quantity

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
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <TopBar />

      {/* Middle Header */}
      <MiddleHeader />

      {/* Categories */}
      <nav
        className={
          header
            ? `bg-gray-600 shadow fixed z-10 w-full top-0 text-white`
            : "bg-gray-300 shadow "
        }
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <CategoriesDropdown />
            <div className="flex-1 flex justify-between px-16 ">
              <div className="flex items-center justify-between">
                {/* Desktop Menu */}
                <DesktopMenu />

                {/* Mobile Menu */}
                <MobileMenu />
              </div>

              <div className="flex items-center gap-4">
                <HeartIcon className="h-6 w-6 cursor-pointer" />
                <ShopingCartIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
