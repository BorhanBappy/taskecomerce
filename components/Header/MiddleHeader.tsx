import Image from "next/image";
import { SearchIcon, HeadphonesIcon } from "lucide-react";

const MiddleHeader = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
      {/* Logo */}
      <Image
        src="/image/logo_1521851058__88672.webp"
        alt="icon"
        height={100}
        width={100}
        className="h-16 w-28"
      />

      {/* Search Bar */}
      <div className="flex items-center border-4 rounded-full max-w-[500px] p-2 border-orange-600 bg-white shadow-md">
        <input
          type="text"
          placeholder="Search the store"
          className="w-full p-2 outline-none bg-transparent"
        />
        <button className="p-2 bg-primary text-white rounded-full hover:bg-orange-700 transition duration-300">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Contact Info */}
      <div className="flex items-center space-x-4 p-4">
        <HeadphonesIcon className="h-16 w-16 text-primary" />
        <div>
          <h3>Call Us: 0000000</h3>
          <h3>Email: bbhjdj@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
