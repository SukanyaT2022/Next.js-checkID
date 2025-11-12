import React from 'react'

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

const ProductDetail = async ({params}: ProductDetailProps) => {
  const { id } = await params;
  console.log('ID:', id);
  
  return (
    <div className="p-8">
        <h2 className="text-2xl font-bold">Product Detail Page - ID: {id}</h2>
    </div>
  )
}

export default ProductDetail