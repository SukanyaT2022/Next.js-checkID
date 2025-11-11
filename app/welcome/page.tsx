import Square from "@/src/components/Square";
import React from "react";
import {data} from '../../src/utils/data';
import Link from "next/link";
import {useRouter} from "n";
const Welcome = () => {

  return (
    <div>
      <h2>Welcome Page</h2>
      <div className="grid grid-cols-4 gap-4">
{
  data && data.map((item)=>(
    <Link href={`/${item.id}`} key={item.id} >
      <Square
      idProp={item.id}
        imageProp={item.image}
        priceProp={item.price}
        typeProp={item.type}
        bedroomsProp={item.bedrooms}
        ratingProp={item.rating}
        reviewsProp={item.reviews}
        
      />
    </Link>
  ))
}
</div>   
    </div>
  );
};

export default Welcome;
