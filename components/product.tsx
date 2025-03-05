import Image from "next/image";
import React from "react";
import StarRating from "./Starrating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Images: string[] = [
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/130/463/4__80724.1517125585.1280.1280__70856__08481.1522343849.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/130/463/4__80724.1517125585.1280.1280__70856__08481.1522343849.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/130/461/1__97755__41987.1522343849.jpg?c=2",
];

function Product() {
  return (
    <div className="border">
      <div className=" flex flex-col items-center p-2">
        <Image
          src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/130/461/1__97755__41987.1522343849.jpg?c=2"
          alt="name"
          height={174}
          width={174}
        />
        <h1 className=" hover:text-orange-500">Photo Name</h1>
        <StarRating maxRating={5} color="gray" size={15} />
        <h1>Product Prize</h1>
      </div>
      <div className="flex justify-center gap-2">
        <button className=" bg-orange-500 text-white p-2 rounded-3xl">
          Add to Card
        </button>
        <div className="rounded-full border border-orange-600 hover:bg-orange-500">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-orange-500 h-10 w-10 p-2 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
