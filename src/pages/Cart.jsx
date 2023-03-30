import React from 'react'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'
import { MdDeleteOutline } from 'react-icons/md'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart'/>

      <section className='mx-20 lg:mx-40 mt-10'>
        <div className=''>
          {
            cartItems?.length === 0 ? (<h2 className='text-xl font-semibold'>No Item added to cart</h2>) 
            :(
              <div className='lg:w-[70rem] gap-10'>
              <div className='border-b-4 flex text-lg font-bold '>
                <span className='w-[25rem] flex '>Image</span>
                <span className='w-[20rem]'>Product</span>
                <span className='w-[20rem] text-end'>Price</span>
                <span className='w-[20rem] text-end'>Quantity</span>
                <span className='w-[20rem] text-end'>Delete</span>
              </div>
              <div>
                {
                  cartItems?.map((item, index) =>(
                   <Tr item={item} key={index}/>
                  ))
                }
              </div>
              
            </div>
            )
          }
         
          <div></div>
        </div>
      </section>
    </Helmet>
  )
}

const Tr = ({item}) =>{
 const dispatch = useDispatch()
 
const deleteProduct =() =>{
  dispatch(cartActions.deleteItem(item?.id))
  console.log("itemssss",item);
}

  return <>
  <div  className='flex border-b-2'> 
    <span className='w-[25rem] flex justify-start'>
     <img src={item.imgUrl} className='w-36 pr-5 flex' alt="" />
    </span>
    <span className='w-[20rem]  py-4'>{item.productName}</span>
    <span className='w-[20rem] text-end py-4' >$ {item.price}</span>
    <span className='w-[20rem] text-end py-4'>{item.quantity} px</span>
    <span className='w-[20rem] text-end py-4 flex justify-end'>
      <span className='btn btn-ghost' >
        <MdDeleteOutline onClick={deleteProduct} 
           className='text-2xl  text-black  '/>
       </span>
    </span>
  </div>
  </>
  
}

export default Cart
