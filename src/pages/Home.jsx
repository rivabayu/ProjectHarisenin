import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../component/Helmet/Helmet'
import Hero from '../assets/images/hero-img.png'
import Services from '../component/Services'
import ProductList from '../component/UI/ProductList'
import products from '../assets/data/products'
import ProductList2 from '../component/UI/ProductList2'

import imgdiskon from '../assets/images/counter-timer-img.png'
import Clock from '../component/UI/Clock'
 

const Home = () => {

  const [rekomenadasi, setRekomendasi] = useState([])
  const [bestSales, setBestSales] = useState([])
  const [arivalProduk, setArivalProduk] = useState([])
  const [arivalProduk2, setArivalProduk2] = useState([])
  

  useEffect (()=>{
    const filterRekomendasiProduts = products.filter((item) => item.category === 'chair');
    const filterBestSalesProduts = products.filter((item) => item.category === 'sofa');
    const filterArivalProduts = products.filter((item) => item.category === 'watch');
    const filterArival2Produts = products.filter((item) => item.category === 'wireless');

    setRekomendasi(filterRekomendasiProduts)
    setBestSales(filterBestSalesProduts)
    setArivalProduk(filterArivalProduts)
    setArivalProduk2(filterArival2Produts)
    
  }, [])

  const date = new Date().getFullYear()
  return  <Helmet title={'Home'}>

    {/* Hero section */}
    <section className='px-20 py-20 md:pt-32 lg:pt-40 bg-heroBgColor'>
        <div className='flex justify-center lg:px-20'>
          <div className=''>
            <p className='text-md font-semibold py-2'>Trending Product in {date}</p>
            <h2 className='text-4xl font-bold
            py-2'>Make Your Style Modern & Futuristic</h2>
            <p className='text-sm py-2 pr-7 lg:pr-40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nihil recusandae magnam, assumenda, tempora omnis atque ratione iusto quidem perspiciatis aut possimus quam quas neque sint, aperiam illo explicabo voluptatem?</p>
            <button className='border-b-2 pt-5 border-black font-semibold hover:scale-110'>
              <Link to='/shop'>SHOP NOW
              </Link></button>
          </div>
          <div className=''>
            <img src={Hero} className='w-[50rem]' alt="" />
          </div>
        </div>
        <div></div>
    </section>

    {/* Service */}
    <Services/>

    {/* rekomendasi product */}
    <section>
      <div className='flex justify-center text-2xl'>
          Rekomendasi Product
      </div>
      <div className='px-20'>
        <ProductList data={rekomenadasi}/>
      </div>
    </section>

      {/* diskon */}
    <section className='mt-6 bg-[#0a1d37] h-[400px]'>
        <div className='flex justify-between md:mx-20 lg:mx-48'>
            <div className='flex flex-col justify-center'>
              <div className=''> 
                <div className='text-xl font-light text-white'>Penawaran Terbatas</div>
                <div className='text-2xl font font-semibold text-white'>Kursi Gaming</div>
              </div>
              <Clock/>
              <Link to='/shop'>
                <button className="btn bg-white text-[#0a1d37] hover:bg-[#0a1d37] hover:text-white btn-active">Kunjungi Toko</button>
              </Link>
            </div>
            <div>
              <img src={imgdiskon} className='object-contain text-end' alt="" />
            </div>
        </div>
    </section>
    {/* best seling */}
    <section className='mt-6'>
    <div className='flex justify-center text-2xl'>
          Best Selling
      </div>
      <div className='px-20'>
      <ProductList2 data={bestSales}/>
      </div>
    </section>
      

    {/* <section className='mt-6'>
    <div className='flex justify-center text-2xl'>
          JAM KEREN
      </div>
      <div className='px-20'>
      <ProductList data={arivalProduk}/>
      
      </div>


    </section> */}
  </Helmet>
  
}

export default Home
