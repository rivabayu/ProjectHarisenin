import React, { useRef, useState, useEffect } from 'react'
import { MdStar } from 'react-icons/md'

import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'
import ProductList from '../component/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify';

function ProductDetails() {
  const [tap, setTap] = useState('desc')
  const [rating, setRating] = useState(null)

  const reviewUser = useRef('')
  const reviewMsg = useRef('')

  const dispatch = useDispatch()

  const {id} = useParams()
  const product = products.find(item => item.id === id)

  const {imgUrl, productName, price, avgRating, reviews,shortDesc, description, category} =product

  const relatedProduts = products.filter(item => item.category === category)

  const submitHandler = (e)=>{
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewUser.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating
    }
    console.log(reviewObj)
  }

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      productName,
      price,
      image: imgUrl,
    }))
    toast.success('Product added Successfully')
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title = {productName} >
      <CommonSection title={productName}/>
      <div className=' px-20 '>
        <div className='flex flex-row justify-center'>
          <div>
            <img src={imgUrl} className="w-[45rem] lg:w-[35rem]" alt="" />
          </div>
          <div className='flex flex-col pt-10 lg:pt-20 lg:py-20 '>
            <h2 className='text-2xl font-semibold py-2'>{productName}</h2>
            <div className='flex py-2'>
              <MdStar className='text-yellow-500 text-xl'/>
              <div className=''>( <span className='font-semibold'>{avgRating}</span> Ratings)</div>
              
            </div>
              <span className='font-thin text-md'>{category}</span>
            <div>
              <span className='font-semibold pb-2 text-xl'>$ {price}</span>
              <p className='py-2 w-[20rem] lg:w-[50rem]  text-justify text-gray-400'>{shortDesc}</p>
            </div>
            <button onClick={addToCart} className="btn w-40 mt-10 hover:bg-white hover:text-[#0a1d37] bg-[#0a1d37] text-white btn-active">Add To Cart</button>
          </div>
        </div>


        <div className='flex flex-col'>
          <div className='py-4 flex gap-10 '>
            <div className={`${tap=== 'desc'? 'text-lg font-semibold' : 'cursor-pointer text-lg'}`} onClick={()=> setTap('desc')}>
              Descriptions</div>
            <div className={`${tap=== 'rev'? 'text-lg font-semibold ' : 'cursor-pointer text-lg'}`} onClick={()=> setTap('rev')}>
             <span className=''>Review 
              </span> ({reviews.length}) </div>
          </div>
          <div>
            {tap==='desc' ?( <p className='mt-10'>{description}</p>
              ) : ( 
              <div className='mt-10'>
                <div>
                  <ul className=''>
                    {
                      reviews?.map((item, index)=>(
                        <li className=' py-2 gap-3' key={index}>
                          <p className='font-bold py-2'>Jhon Takpor</p>
                          <span className='text-orange-500 py-2'>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                          <span className='text-headingText'>_______________________________________</span>
                        </li>
                      ))}
                  </ul>
                  <div className='flex justify-center mt-10'>
                    <div className='flex flex-col w-[50rem]'>
                      <h1 className='text-2xl font-semibold text-center'>leave your experience</h1>
                      <form className='mt-10 ' onSubmit={submitHandler}>
                        <input ref={reviewUser} type="text" placeholder="Enter Name" required className="input input-bordered w-full "/>
                        <div className='flex items-center pt-4 gap-8'>
                          <span className='flex items-center justify-center  text-lg gap-2 text-orange-500 scale-110' onClick={()=> setRating(1)}><MdStar/> <p className='flex mt-[0.2rem]'>1</p></span>
                          <span onClick={()=> setRating(2)} className='flex items-center justify-center  text-lg gap-2 text-orange-500 scale-110'><MdStar/> <p className='flex mt-[0.2rem]'>2</p></span>
                          <span onClick={()=> setRating(3)} className='flex items-center justify-center  text-lg gap-2 text-orange-500 scale-110'><MdStar/> <p className='flex mt-[0.2rem]'>3</p></span>
                          <span onClick={()=> setRating(4)} className='flex items-center justify-center  text-lg gap-2 text-orange-500 scale-110'><MdStar/> <p className='flex mt-[0.2rem]'>4</p></span>
                          <span onClick={()=> setRating(5)} className='flex items-center justify-center  text-lg gap-2 text-orange-500 scale-110'><MdStar/> <p className='flex mt-[0.2rem]'>5</p></span>
                        </div>
                        <textarea ref={reviewMsg} className="textarea textarea-bordered mt-4 w-full" required placeholder="Review Message..."/>
                        <button type='submit' className="btn w-40 mt-10 hover:bg-white hover:text-[#0a1d37] bg-[#0a1d37] text-white btn-active">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
          </div>

          <div className='mt-10'>
            <div className='text-2xl font-semibold'>Product Related</div>
            <div>
              <ProductList data={relatedProduts}/>
            </div>
          </div>
         
        </div>
      </div>
    </Helmet>
  )
}

export default ProductDetails
