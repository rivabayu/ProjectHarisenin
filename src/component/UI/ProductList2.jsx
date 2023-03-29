import React from 'react'
import ProductCard from './ProductCard'


const ProductList2 = ({data}) => {
  return (
    <div className='mt-4 grid md:grid-cols-2 mx-9 gap-7 lg:grid-cols-4 lg:mx-36 lg:gap-10'>
    {data?.map((item) =>(
      <ProductCard item={item}/>
    ))}
</div>
  )
}

export default ProductList2
