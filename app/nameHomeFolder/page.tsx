'use client';
import { useRouter } from 'next/navigation';
// Step 1: Import useRouter from next/navigation

import NameComp from '@/src/components/NameComp'
import React from 'react'
import { nameData } from '../../src/utils/nameData';

const NameHome = () => {
  // Step 2: Initialize the router
  const router = useRouter();

  return (
  <div>
    <h1 className="text-2xl font-bold mb-4 p-4">Name Home - Using useRouter</h1>
    <div className="grid grid-cols-3 gap-4 p-4">
    {
    nameData && nameData.map((item)=>( 
      // Step 3: Wrap component in div with onClick to navigate using router.push
      <div 
        key={item.id} 
        onClick={() => router.push(`/nameDetailUseRouter/${item.id}`)}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <NameComp
          imageProp={item.image}
          idProp={item.id} 
          priceProp={`${item.price}`}
        />
      </div>
    ))
    }
    </div>
  </div>
  )
}

export default NameHome

