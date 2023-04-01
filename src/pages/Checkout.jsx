import React from 'react'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'

import { useSelector } from 'react-redux'
const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Checkout' >
      <CommonSection title="Checkout"/>

      <section className='mx-20 lg:mx-40 mt-10'>
        <div className='flex lg:flex-row md:flex-col'>
          <div className=''>
              <div className='text-xl font-semibold'>Biling Information</div>
              <div className='lg:w-[40rem] '>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full my-2 " />
                <input type="text" placeholder="Your Email" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="Street Address" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="City" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="Postal Code" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="Country" className="input input-bordered w-full my-2" />
              </div>
          </div>
          <div>
            <div className='bg-headingText text-white p-2 mt-5 rounded-lg lg:mx-20 w-[20rem] lg:h-[13rem]'>
                <div className='pt-2 px-4 flex justify-between'>
                  <span>Total Qty</span>
                  <span className='font-semibold'>{totalQty} items</span>
                </div>
                <div className='pt-2 px-4 flex justify-between'>
                  <span>Subtotal</span>
                  <span className='font-semibold'>$ {totalAmount}</span>
                </div>
                <div className='pt-2 px-4 flex justify-between'>
                  <span>Shipping</span>
                  <span className='font-semibold'>0</span>
                </div>
                <div className='pt-2 pb-2 px-4 flex justify-between '>
                  <span>Free Shipping</span>
                  <span className='font-semibold'>10</span>
                </div>
                <div className='pt-2 flex justify-between border-t-[1px] mx-4'>
                  <span className='text-2xl font-bold'>Total Cost</span>
                  <span className='font-bold text-2xl'>$ {totalAmount}</span>
                </div>
                <div className='flex justify-center'>
                  <button className="btn btn-wide mt-2 flex bg-white text-headingText hover:bg-headingText hover:text-white hover:border-none">Order</button>
                </div>
            </div>
           
          </div>
        </div>
      </section>
    </Helmet>
    
   
  )
}

export default Checkout
