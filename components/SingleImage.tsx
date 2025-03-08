import Image from "next/image";

export default function SingleImage() {
  return (
    <div className="group relative h-auto w-full overflow-hidden container mx-auto py-8">
      {/* <!-- Image --> */}
      <Image
        src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/banner/home2/4.jpg"
        alt="Animated Image"
        width={800} // Set a proper width
        height={500} // Set a proper height
        className="h-auto w-full"
      />

      {/* <!-- Animated Overlay --> */}
      <div className="absolute inset-0 translate-y-100  h-full w-full bg-[rgba(255,255,255,0.4)]  transition-all duration-300 ease-in group-hover:translate-0 "></div>
    </div>
  );
}
