"use client";
import TopBar from "./TopBar";
import MiddleHeader from "./MiddleHeader";
import CategoriesDropdown from "./CategoriesDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <TopBar />

      {/* Middle Header */}
      <MiddleHeader />

      {/* Categories */}
      <div className="bg-gray-300 shadow">
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
      </div>
    </header>
  );
};

export default Header;
