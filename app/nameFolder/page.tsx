import NameComp from '@/src/components/NameComp'
import React from 'react'
import { nameData } from '../../src/utils/nameData';
const page = () => {
  return (
  <div>
    {
    nameData && nameData.map((item)=>(    
      <NameComp
        key={item.id} 
        idProp={item.id} 
        priceProp={`${item.price}`}
         />
    ))
    }
  </div>
  )
}

export default page