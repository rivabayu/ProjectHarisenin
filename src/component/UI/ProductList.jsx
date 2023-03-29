import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data, item}) => {
  return (
    <>
    <div className='mt-4 flex flex-row justify-center gap-10 overflow-x-scroll h-[25rem]'>
        {data?.map((item) => (
          <ProductCard item={item}/>
        ))}
    </div>
    </>
  )
}

export default ProductList
