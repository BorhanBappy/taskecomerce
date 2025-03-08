// import ImageSlider from "@/components/BloagImages";
import ImageSlider from "@/components/BloagImages";
import BlurImage from "@/components/BlurImage";
import ImagesSlide from "@/components/ImageSlider";

import HomePage from "@/components/HomePage";
import HomeProduct from "@/components/HomeProduct";
import ShippingDelivery from "@/components/ShippingDelivery";
import SingleImage from "@/components/SingleImage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ShippingDelivery />
      <BlurImage />
      {/* <DataFetch /> */}
      <HomeProduct />
      <SingleImage />
      <ImageSlider />
      {/* <ImagesSlide /> */}
    </div>
  );
}
