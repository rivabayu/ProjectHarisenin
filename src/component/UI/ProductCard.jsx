import React from 'react'

import {AiFillPlusSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const ProductCard = ({item}) => {
  const dispatch = useDispatch()
  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl ,
    }))

    toast.success('Product added Successfully')
  }
  return (
    <div className=''>
        <div className="card w-[20rem] h-[20rem] bg-base-100 shadow-xl cursor-pointer m-none">
            <figure className=" ">
                <img src={item.imgUrl} alt="product" className="w-52 h-[12rem] hover:scale-110" />
            </figure>
            <div className="p-4">
                <Link to={`/product-details/${item.id}`} className="font-bold text-lg ">{item.productName}</Link>
                <p className='text-sm'>{item.category}</p>
                <div className='flex justify-between pt-5'>
                  <div className='text-md font-semibold'><span>$ </span>{item.price}</div>
                  <AiFillPlusSquare className='text-3xl -mt-2 hover:text-white hover:bg-black' onClick={addToCart}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
