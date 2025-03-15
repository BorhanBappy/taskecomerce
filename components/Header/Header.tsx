"use client";
import TopBar from "./TopBar";
import MiddleHeader from "./MiddleHeader";
import CategoriesDropdown from "./CategoriesDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { CircleUserIcon, HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ShopingCartIcon from "./ShopingCartIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState(false);
  // const [status, setStatus] = useState(true);
  const status = true;
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
            ? `bg-gray-600 shadow fixed z-10 w-full top-0 text-white text-xl`
            : "bg-gray-300 shadow"
        }
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <CategoriesDropdown />
            <div className="flex-1 flex justify-between px-16">
              <div className="hidden sm:flex items-center justify-between">
                {/* Desktop Menu */}
                <DesktopMenu />
              </div>

              <div className="flex items-center gap-6 ">
                {/* Mobile Menu */}

                <div className="flex-col justify-center justify-items-center xl:hidden">
                  <MobileMenu />
                  <h1>Menu</h1>
                </div>
                <div className="flex-col justify-center justify-items-center">
                  <HeartIcon className="h-6 w-6 cursor-pointer" />
                  <h1 className="text-sm">Watches </h1>
                </div>
                <div className="flex-col justify-center justify-items-center">
                  <ShopingCartIcon />
                  <h1 className="text-sm">Cart</h1>
                </div>

                {/* My Account Dropdown (shadcn Dropdown Menu) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex-col justify-center justify-items-center xl:hidden">
                      <CircleUserIcon className="h-6 w-6 text-primary" />
                      <h1>Account</h1>
                    </div>
                  </DropdownMenuTrigger>
                  {status && (
                    <DropdownMenuContent className="w-40 bg-gray-300 border-none">
                      <DropdownMenuItem className="cursor-pointer">
                        <Link href={"/cart"}> Check In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
