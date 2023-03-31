import React from 'react'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'
import { MdDeleteOutline } from 'react-icons/md'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {

  const cartItems = useSelector(state => state?.cart?.cartItems)
  const totalAmount = useSelector(state => state?.cart?.totaAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart'/>
      

      <section className='flex lg:flex-row flex-col mx-20 lg:mx-40 mt-10'>
        <div className=''>
          {
            cartItems?.length === 0 ? (<h2 className='text-xl font-semibold'>No Item added to cart</h2>) 
            :(
              <div className='w-[40rem] lg:w-[70rem] gap-10'>
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
                   <Div item={item} key={index}/>
                  ))
                }
              </div>
            </div>
            )
          }
        </div>
          <div className='mt-10'>
            <div className='py-4 '>
              <h6 className='font-bold uppercase text-2xl'>SubTotal</h6>
              <span className=' text-xl'>$ {totalAmount}</span>
            </div>
            <div>
              <Link to='/checkout'>
                <button className="btn btn-wide mt-2 flex hover:bg-white hover:text-headingText bg-headingText text-white ">CheckOut</button>
              </Link>
              <Link to='/shop'>
                <button className="btn btn-wide mt-2 flex hover:bg-white hover:text-headingText bg-headingText text-white ">Continue Shopping</button>
              </Link>
            </div>
          </div>
      </section>
    </Helmet>
  )
}

const Div = ({item}) =>{
 const dispatch = useDispatch()
//  console.log(item)
 
const deleteProduct = () =>{
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
      <span className='cursor-pointer' >
        <MdDeleteOutline  onClick={deleteProduct}
           className='text-2xl  text-black  '/>
       </span>
    </span>
  </div>
  </>
  
}

export default Cart
