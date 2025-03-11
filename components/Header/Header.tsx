"use client";
import TopBar from "./TopBar";
import MiddleHeader from "./MiddleHeader";
import CategoriesDropdown from "./CategoriesDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const Header = () => {
  const [header, setHeader] = useState(false);
  const { cartItems } = useCart();

  // Calculate total quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
                <Link href="/cart" className="relative">
                  <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
                  {/* Display total quantity */}
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
