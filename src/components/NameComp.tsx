import React from 'react'
interface nameProps {
idProp?: number;
priceProp?: string;
}
const NameComp = ({idProp, priceProp}:nameProps) => {
  return (
    <div className='border-2 border-green-500 w-[200px] h-[200px] flex items-center justify-center'>
        <p>{idProp}</p>
        <p>{priceProp}</p>
    </div>
  )
}

export default NameComp