import BlurImage from "@/components/BlurImage";
import DataFetch from "@/components/DataFetch";
import ProductPage from "@/components/ProductPage";

import HomePage from "@/components/HomePage";
import ShippingDelivery from "@/components/ShippingDelivery";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ShippingDelivery />
      <BlurImage />
      {/* <DataFetch /> */}
      <ProductPage />
    </div>
  );
}
