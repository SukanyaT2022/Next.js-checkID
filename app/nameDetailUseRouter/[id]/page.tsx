'use client';
// When using dynamic route [id], use useParams to get the id
import React from 'react'
import { useParams } from 'next/navigation'
import { nameData } from '@/src/utils/nameData';
import NameComp from '@/src/components/NameComp';
// This gets the id from the URL like /nameDetailUseRouter/5

const NameDetail = () => {
    // useParams extracts [id] from the dynamic route
    const params = useParams();
    const id = params.id; // This gets the id from the URL path
    const productDetail = nameData.find(item => item.id.toString() === id);
    console.log('ID from URL:', id);
    
  return (
    <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Name Detail Page</h2>
        <p className="text-lg">Check extracted id here: <span className="font-bold text-blue-600">{id}</span></p>

{/* 
    imageProp={productDetail?.image}
    idProp={productDetail?.id}
    priceProp={`${productDetail?.price}`} */}

    
    </div>
  )
}

export default NameDetail