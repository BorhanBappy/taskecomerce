import { LockIcon, GiftIcon, CircleUserIcon } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gray-300 p-2">
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
  );
};

export default TopBar;
