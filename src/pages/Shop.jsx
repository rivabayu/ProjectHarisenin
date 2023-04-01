import React,{useEffect, useState} from 'react'
import { MdSearch } from 'react-icons/md'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'

import products from '../assets/data/products'
import ProductList from '../component/UI/ProductList'

const Shop = () => {

  const [productData, setProductData] = useState(products)

  const handleFilter = (e)=>{
    const filtervalue = e.target.value
    if(filtervalue === 'sofa'){
      const filterProducts = products.filter(
        (item) => item.category === 'sofa'
      )

      setProductData(filterProducts)
    }
    if(filtervalue === 'mobile'){
      const filterProducts = products.filter(
        (item) => item.category === 'mobile'
      )

      setProductData(filterProducts)
    }
    if(filtervalue === 'chair'){
      const filterProducts = products.filter(
        (item) => item.category === 'chair'
      )

      setProductData(filterProducts)
    }
    if(filtervalue === 'watch'){
      const filterProducts = products.filter(
        (item) => item.category === 'watch'
      )

      setProductData(filterProducts)
    }
    if(filtervalue === 'wireless'){
      const filterProducts = products.filter(
        (item) => item.category === 'wireless'
      )

      setProductData(filterProducts)
    }


  }

  const handleSearch = (e) => {
    const searchTern = e.target.value
    const searchProduct = products.filter(item => item.productName.toLowerCase().includes(searchTern.toLowerCase()))

    setProductData(searchProduct)
  }
  return (
    <Helmet title='Shop'>
      <CommonSection title='Product'/>

      <section className='flex justify-center'>
        <div className='flex gap-5 px-20 py-10'>
          <div className=''>
            <select onChange={handleFilter} className="select h-2 w-full bg-headingText text-white">
              <option disabled selected>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
          <div>
          </div>
          <div>
            <div className='flex items-center border-2 rounded-lg border-black lg:w-[40rem] justify-between cursor-pointer' onChange={handleSearch}>
              <input type="search" placeholder="Search" className="h-[3rem] w-full  border-white border outline-none p-4"/>
                <MdSearch className='text-3xl mr-4'/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='md:mx-20 lg:mx-40'>
          {
            productData.length === 0? <h1 className='flex justify-center text-xl font-semibold'>Product not found</h1> : <ProductList data={productData}/>
          }
        </div>
      </section>
    </Helmet>
  )
}

export default Shop
