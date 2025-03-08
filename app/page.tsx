// import ImageSlider from "@/components/BloagImages";
import ImageSlider from "@/components/BloagImages";
import BlurImage from "@/components/BlurImage";

import HomePage from "@/components/HomePage";
import HomeProduct from "@/components/HomeProduct";
import ShippingDelivery from "@/components/ShippingDelivery";
import SingleImage from "@/components/SingleImage";
import BrandSlider from "@/components/Brand";
import ProductList from "@/components/DataFetch";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ShippingDelivery />
      <BlurImage />
      {/* <DataFetch /> */}
      <ProductList />
      {/* <HomeProduct /> */}
      <SingleImage />
      <ImageSlider />
      <BrandSlider />
      {/* <ImagesSlide /> */}
    </div>
  );
}
