"use client";

import React, { useState, useEffect } from "react";
import {
  LockIcon,
  GiftIcon,
  CircleUserIcon,
  SearchIcon,
  HeadphonesIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    account: false,
    currency: false,
  });
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setDropdownOpen({ account: false, currency: false });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!isClient) return null;

  const toggleDropdown = (dropdown: keyof typeof dropdownOpen) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
      [dropdown === "account" ? "currency" : "account"]: false,
    }));
  };

  return (
    <header className="">
      {/* Top Bar */}
      <div className="bg-gray-400">
        <div className="container mx-auto">
          <div className="flex justify-between p-2">
            <div className="text-sm font-semibold">Free Shipping</div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-1 cursor-pointer">
                <LockIcon />
                <span>Sign In</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <GiftIcon />
                <span>Gift Certificates</span>
              </div>

              {/* My Account Dropdown */}
              <div className="relative dropdown">
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => toggleDropdown("account")}
                  aria-expanded={dropdownOpen.account}
                >
                  <CircleUserIcon />
                  <span>My Account</span>
                </div>
                {dropdownOpen.account && (
                  <div className="absolute bg-white border shadow-md mt-2 p-2 w-24">
                    <div className="cursor-pointer hover:bg-gray-200 p-1">
                      Check Out
                    </div>
                    <div className="cursor-pointer hover:bg-gray-200 p-1">
                      Sign in
                    </div>
                  </div>
                )}
              </div>

              {/* Currency Dropdown */}
              <div className="relative dropdown">
                <div
                  className="cursor-pointer"
                  onClick={() => toggleDropdown("currency")}
                  aria-expanded={dropdownOpen.currency}
                >
                  USD
                </div>
                {dropdownOpen.currency && (
                  <div className="absolute bg-white border shadow-md mt-2 p-2 w-24">
                    <div className="cursor-pointer hover:bg-gray-200 p-1">
                      USD Dollar
                    </div>
                    <div className="cursor-pointer hover:bg-gray-200 p-1">
                      AUD
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Image
          src="/image/logo_1521851058__88672.webp"
          alt="icon"
          height={100}
          width={100}
        />

        {/* Search Bar */}
        <div className="flex items-center border rounded p-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search the store"
            className="w-full p-1 outline-none"
          />
          <SearchIcon className="ml-2 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4 p-4">
          <HeadphonesIcon />
          <div>
            <h3>Call Us: 0000000</h3>
            <h3>Email: bbhjdj@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-400">
        <div className="container mx-auto flex justify-between p-4">
          <div className="flex gap-6 items-center">
            {/* Categories Dropdown */}
            <DropdownMenu
              open={openDropdown}
              onOpenChange={() => setOpenDropdown(false)}
            >
              <DropdownMenuTrigger
                className="cursor-pointer"
                onMouseEnter={() => setOpenDropdown(true)}
              >
                ALL CATEGORIES
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56"
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Fashion</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Clothing</DropdownMenuItem>
                      <DropdownMenuItem>Delicacies</DropdownMenuItem>
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Kitchen</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Angene mafin</DropdownMenuItem>
                      <DropdownMenuItem>Boys News</DropdownMenuItem>
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Computer</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Clothing
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Angene mafin</DropdownMenuItem>
                            <DropdownMenuItem>
                              Cake and coociks
                            </DropdownMenuItem>
                            <DropdownMenuItem>More...</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>Handbag Juelary</DropdownMenuItem>
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>Bags</DropdownMenuItem>
                <DropdownMenuItem>Watches</DropdownMenuItem>
                <DropdownMenuItem>Smartphone</DropdownMenuItem>
                <DropdownMenuItem>Health & Beauty</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div>HOME</div>
            <div>LAYOUT</div>
            <div>BLOG</div>
            <div>ABOUT US</div>
            <div>BONUS PAGE</div>
          </div>
          <div className="flex items-center gap-4">
            <HeartIcon className="h-6 w-6" />
            <ShoppingCartIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
