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
  SidebarIcon,
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
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="">
      {/* Top Bar */}
      <div className="bg-gray-300 p-2 ">
        <div className="container mx-auto">
          <div className="flex justify-between p-2">
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
      <div className="container mx-auto flex items-center justify-between p-8 ">
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
          <div className=" flex">
            <DropdownMenu
              open={openDropdown}
              onOpenChange={() => setOpenDropdown(false)}
            >
              <DropdownMenuTrigger
                className="bg-orange-600 p-6 shadow-md text-white uppercase font-bold cursor-pointer hover:bg-orange-700 transition-colors rounded-t-2xl -mt-2 border-none"
                onMouseEnter={() => setOpenDropdown(true)}
              >
                <div className="flex gap-4 items-center w-[300px]">
                  <SidebarIcon />
                  ALL CATEGORIES
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[350px] bg-amber-300  border-none -mt-1"
                onMouseLeave={() => setOpenDropdown(false)}
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
              <div className="flex gap-6 items-center text-2xl">
                {/* Categories Dropdown */}
                <div className="cursor-pointer">HOME</div>
                <div className="cursor-pointer">LAYOUT</div>
                <div className="cursor-pointer">BLOG</div>
                <div className="cursor-pointer">ABOUT US</div>
                <div className="cursor-pointer">BONUS PAGE</div>
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
