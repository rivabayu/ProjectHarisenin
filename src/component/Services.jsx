import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLocalShipping, MdOutlineHighQuality} from 'react-icons/md'
import {RiRefreshLine,RiSecurePaymentLine} from 'react-icons/ri'
import { motion } from 'framer-motion'
function Services() {
  return <section className='px-20 py-10 lg:px-40'>
        <div className='lg:flex items-center justify-center'>
            <div className='flex gap-5 lg:gap-10'>
                <div className='p-2 bg-cartBg1 w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black hover:scale-105'>
                    <div className='flex items-center p-2'>
                     <MdOutlineLocalShipping className='text-white bg-black rounded-full p-1 text-[2.2rem]'/>
                    </div>
                    <div>
                        <div className='text-2xl font-bold py-1'>Free Ongkir</div>
                        <p className='text-md'>Gratis Ongkir Ke Seluruh Indonesia</p>
                    </div>
                </div>
                <div className='p-2 bg-[#ceebe9] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black hover:scale-105'>
                    <div className='flex items-center p-2'>
                     <MdOutlineHighQuality className='text-white bg-black rounded-full p-1 text-[2.2rem]'/>
                    </div>
                    <div>
                        <div className='text-2xl font-bold py-1'>High Quality</div>
                        <p className='text-md'>Barang Berkualitas</p>
                    </div>
                </div>
                <div className='p-2 bg-[#e2f2b2] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black hover:scale-105'>
                    <div className='flex items-center p-2'>
                     <RiSecurePaymentLine className='text-white bg-black rounded-full p-1 text-[2.2rem]'/>
                    </div>
                    <div>
                        <div className='text-2xl font-bold py-1'>Secure Payment</div>
                        <p className='text-md'>Pembayaran terjamin</p>
                    </div>
                </div>
                <div className='p-2 bg-[#d6e5fb] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black hover:scale-105'>
                    <div className='flex items-center p-2'>
                     <RiRefreshLine className='text-white bg-black rounded-full p-1 text-[2.2rem]'/>
                    </div>
                    <div>
                        <div className='text-2xl font-bold py-1'>Back Guarantee</div>
                        <p className='text-md'>Jaminan Uang Kembali</p>
                    </div>
                </div>
            </div>
        </div>
  </section>
   
  
}

export default Services
