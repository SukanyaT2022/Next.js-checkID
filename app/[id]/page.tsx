import React from 'react'

const ProductDetail = ({params}:any) => {

  return (
    <div>
        <h2>Product Detail Page - ID: {params.id}</h2>
    </div>
  )
}

export default ProductDetail