import Image from "next/image";
import React from "react";
interface SquareProps {
  imageProp?: string;
  priceProp?: number;
  typeProp?: string;
  bedroomsProp?: number;
  ratingProp?: number;
  reviewsProp?: number;
  idProp?: number;
}
const Square = ({
  imageProp,
  priceProp,
  typeProp,
  bedroomsProp,
  ratingProp,
  reviewsProp,
  idProp,
}: SquareProps) => {
  return (
    // mainbox
    <div className="border-2 border-amber-500 w-[300px] h-[340px]">
      {/* <Image src={imageProp || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"} width={300} height={200} alt='house image'/> */}
      {/* imaage div */}
      <div  className=" bg-blue-300 h-[30%]">
        {imageProp ? (
          <img
            src={imageProp}
            className="w-full h-full object-cover"
            alt="house image"
          />
        ) : (
          <p>No image</p>
        )}
      </div>
{/* text div */}
      <div className=" bg-green-300 h-[70%]">
      <div>id: {idProp || "N/A"}</div>
        <div>Price: {priceProp || "N/A"}</div>
        <div>Type: {typeProp || "N/A"}</div>
        <div>Bedrooms: {bedroomsProp || "N/A"}</div>
        <div>Rating: {ratingProp || "N/A"}</div>
        <div>Reviews: {reviewsProp || "N/A"}</div>
      </div>
    </div>
  );
};

export default Square;
