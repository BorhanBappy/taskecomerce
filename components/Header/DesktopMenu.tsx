import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="gap-6 items-center text-2xl hidden xl:flex">
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
  );
};

export default DesktopMenu;
