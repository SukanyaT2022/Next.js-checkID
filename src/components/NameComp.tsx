import React from 'react'
interface nameProps {
idProp?: number;
priceProp?: string;
imageProp?: string;
}
const NameComp = ({idProp, priceProp, imageProp}:nameProps) => {
  return (
    <div className='border-2 border-green-500 w-[200px] h-[200px]  items-center justify-center'>
     
             <img src={imageProp} alt="name image" />
        <div>Id:{idProp}</div>
        <div>price:{priceProp}</div>
    </div>
  )
}

export default NameComp