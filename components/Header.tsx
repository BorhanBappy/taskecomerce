"use client";

import React, { useState } from "react";
import {
  LockIcon,
  GiftIcon,
  CircleUserIcon,
  SearchIcon,
  HeadphonesIcon,
  HeartIcon,
  ShoppingCartIcon,
  SidebarIcon,
  AlignJustify,
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

import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      {/* Top Bar */}
      <div className="bg-gray-300 p-2 ">
        <div className="container mx-auto">
          <div className="hidden md:flex justify-between p-2">
            <div className="text-sm font-semibold">Free Shipping</div>
            <div className="flex space-x-6 items-center mr-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <LockIcon className="text-primary" />
                <span>Sign In</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <GiftIcon className="text-primary" />
                <span>Gift Certificates</span>
              </div>

              {/* My Account Dropdown */}

              <div className="group relative inline-block">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <CircleUserIcon className="text-primary" />
                  <div className="cursor-pointer">My Account</div>
                </div>
                <div className="absolute left-0 mt-2 w-32 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[32px]">
                  <div className="p-2 hover:bg-gray-200 cursor-pointer">
                    Check IN
                  </div>
                  <div className="p-2 hover:bg-gray-200 cursor-pointer">
                    Sign Out
                  </div>
                </div>
              </div>

              {/* Currency Dropdown */}
              <div className="group relative inline-block">
                <div className="cursor-pointer">USD</div>
                <div className="absolute left-0 mt-2 w-32 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-8">
                  <div className="p-2 hover:bg-gray-200 hover:text-primary cursor-pointer">
                    AUD
                  </div>
                  <div className="p-2 hover:bg-gray-200 hover:text-primary cursor-pointer">
                    Us Dollar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 ">
        {/* Logo */}
        <Image
          src="/image/logo_1521851058__88672.webp"
          alt="icon"
          height={100}
          width={100}
          className="h-16 w-28"
        />

        {/* Search Bar */}
        <div className="flex items-center border-4 rounded-full w-[750px] p-2 max-w-md border-orange-600 bg-white shadow-md">
          <input
            type="text"
            placeholder="Search the store"
            className="w-full p-2 outline-none bg-transparent"
          />
          <button className="p-2 bg-primary text-white rounded-full hover:bg-orange-700 transition duration-300">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-4 p-4">
          <HeadphonesIcon className="h-16 w-16  text-primary" />
          <div>
            <h3>Call Us: 0000000</h3>
            <h3>Email: bbhjdj@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className=" bg-gray-300 shadow ">
        <div className="bg-white container mx-auto">
          <div className=" flex flex-col sm:flex-row gap-2 sm:gap-0">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div
                  className={`flex gap-4 uppercase items-center w-[300px] md:w-[300px] bg-orange-600 p-6`}
                >
                  <SidebarIcon />
                  ALL CATEGORIES
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`  w-[300px] md:w-[300px] bg-amber-300  border-none -mt-1`}
              >
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    Fashion
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
                      <DropdownMenuItem className="cursor-pointer">
                        Clothing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Delicacies
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    Kitchen
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
                      <DropdownMenuItem className="cursor-pointer">
                        Angene mafin
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Boys News
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    Computer
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="cursor-pointer">
                          Clothing
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
                            <DropdownMenuItem className="cursor-pointer">
                              Angene mafin
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              Cake and coociks
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              More...
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem className="cursor-pointer">
                        Handbag Juelary
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem className="cursor-pointer">
                  Bags
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Watches
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Smartphone
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Health & Beauty
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex-1 flex justify-between px-16  bg-gray-300 shadow">
              <div className="flex items-center justify-between">
                {/* Desktop Menu (Visible on 1280px and above) */}
                <div className=" gap-6 items-center text-2xl hidden xl:flex">
                  <Link
                    href="/"
                    className="cursor-pointer hover:text-primary transition-colors"
                  >
                    HOME
                  </Link>
                  <div className="cursor-pointer hover:text-primary transition-colors">
                    LAYOUT
                  </div>
                  <div className="cursor-pointer hover:text-primary transition-colors">
                    BLOG
                  </div>
                  <div className="cursor-pointer hover:text-primary transition-colors">
                    ABOUT US
                  </div>
                  <div className="cursor-pointer hover:text-primary transition-colors">
                    BONUS PAGE
                  </div>
                </div>

                {/* Mobile Version (Visible below 1280px) */}
                <div className="xl:hidden p-4 z-10">
                  {/* Hamburger Icon */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white"
                  >
                    {isOpen ? "❌" : <AlignJustify className="h-6 w-6" />}
                  </button>

                  {/* Mobile Menu */}
                  <div
                    className={`absolute left-0 w-full bg-slate-500 text-4xl transform transition-transform duration-300 ${
                      isOpen ? "translate-y-0 " : "translate-y-full opacity-0"
                    }`}
                  >
                    <nav className="flex flex-col gap-4">
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
              </div>

              <div className="flex  items-center gap-4">
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
