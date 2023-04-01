import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import AdminNav from './AdminNav'

const Dashboard = () => {
  const {data: product} = useGetData('product')
  const {data: users} = useGetData('users')
  return (
   <>
    <section className='px-20 py-10 lg:px-40'>
        <div className='lg:flex items-center justify-center'>
            <div className='flex gap-5 lg:gap-10'>
                <div className='p-2 bg-cartBg1 w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black '>
                    <div>
                        <p className='text-md'>Total Sales</p>
                        <div className='text-2xl font-bold py-1'>888</div>
                    </div>
                </div>
                <div className='p-2 bg-[#ceebe9] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black '>
                    <div>
                        <p className='text-md'>Orders</p>
                        <div className='text-2xl font-bold py-1'>777</div>
                    </div>
                </div>
                <div className='p-2 bg-[#e2f2b2] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black '>
                    <div>
                        <p className='text-md'>Total Product</p>
                        <div className='text-2xl font-bold py-1'>{product.length}</div>
                    </div>
                </div>
                <div className='p-2 bg-[#d6e5fb] w-[20rem] rounded-md flex flex-col lg:flex-row items-center gap-2 border-black hover:scale-105'>
                    <div>
                        <p className='text-md'>Total user</p>
                        <div className='text-2xl font-bold py-1'>{users.length}</div>
                    </div>
                </div>
            </div>
        </div>
  </section>
   </>
  )
}

export default Dashboard
