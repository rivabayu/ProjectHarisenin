import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import {db} from '../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import {toast} from 'react-toastify'

const AllProduct = () => {

  const {data:productsData, loading} = useGetData('product')

  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db, 'product', id))
    toast.success('product deleted successfully')
  }

  return (
    <section className='mx-20 lg:mx-40 mt-10'>
      <div className='flex justify-center overflow-y-scroll'>
      <div className='w-[45rem] lg:w-[70rem] gap-10'>
        <div className='border-b-4 flex text-lg font-bold '>
         <span className='w-[25rem] flex '>Image</span>
         <span className='w-[20rem]'>Product</span>
         <span className='w-[20rem] text-end'>Category</span>
         <span className='w-[20rem] text-end'>Price</span>
         <span className='w-[20rem] text-end'>Delete</span>
        </div>
     <div>{loading ? (
        <div className='text-xl font-semibold'>Loading........</div>  
         ) : ( productsData.map(item =>(
         <div  className='flex border-b-2' key={item.id}> 
             <span className='w-[25rem] flex justify-start'>
               <img src={item.imgUrl} className='w-36 pr-5 flex' alt="" />
             </span>
             <span className='w-[20rem]  py-6'>{item.productName}</span>
             <span className='w-[20rem] text-end py-6' >{item.category}</span>
             <span className='w-[20rem] text-end py-6'>$ {item.price}</span>
             <span className='w-[20rem] text-end py-3 flex justify-end'>
              <button onClick={() => {deleteProduct(item.id)}} type='submit' className="btn flex hover:bg-white hover:text-headingText bg-headingText text-white ">Delete</button>
             </span>
          </div>) ) )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProduct
