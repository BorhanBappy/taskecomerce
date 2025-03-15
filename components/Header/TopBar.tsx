import { LockIcon, GiftIcon, CircleUserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const TopBar = () => {
  const status = false; // Assuming this is a state or prop

  return (
    <div className="bg-gray-300 p-2">
      <div className="container mx-auto">
        <div className="hidden md:flex justify-between p-2">
          <div className="text-sm font-semibold">Free Shipping</div>
          <div className="flex space-x-6 items-center mr-8">
            <div className="flex items-center space-x-1 cursor-pointer">
              <LockIcon className="text-primary" />
              <Link href="/signin" passHref>
                <span>Sign In</span>
              </Link>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <GiftIcon className="text-primary" />
              <span>Gift Certificates</span>
            </div>

            {/* My Account Dropdown */}
            {!status && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <CircleUserIcon className="h-6 w-6 text-primary" />
                    <h1>Account</h1>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-gray-300 border-none">
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/signin" passHref>
                      <span>Sign In</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/login" passHref>
                      <span>Log In</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">USD</div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32 bg-white shadow-md rounded-md">
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-200">
                  AUD
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-200">
                  USD
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
