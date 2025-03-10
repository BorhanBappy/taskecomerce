import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0] || "/placeholder.jpg");

  return (
    <div>
      <Image
        src={mainImage}
        alt="Main Product Image"
        width={350} // Decreased main image width
        height={350} // Decreased main image height
        className="w-auto h-auto object-cover"
        priority
        onError={() => setMainImage("/placeholder.jpg")}
      />
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setMainImage(image)}
            className="cursor-pointer"
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={60} // Decreased thumbnail width
              height={60} // Decreased thumbnail height
              className="w-16 h-16 object-cover border rounded-md hover:border-orange-500"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
