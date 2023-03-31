import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../firebase.config'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDes, setEnterShortDes] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterImg, setEnterImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const addProduct = async(e) =>{
    e.preventDefault()
    setLoading(true)

    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDes,
    //   description: enterDescription,
    //   price: enterPrice,
    //   category: enterCategory,
    //   imgUrl: enterImg, 
    // };

    try{
      const docRef = await collection (db, 'product')
      const storageRef =ref(storage, `productImage/${Date.now() + enterImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, enterImg)

      uploadTask.on(()=>{
        toast.error('image not upladed')
      }, 
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await addDoc(docRef, {
            productName: enterTitle,
            shortDesc: enterShortDes,
            description: enterDescription,
            price: enterPrice,
            category: enterCategory,
            imgUrl: downloadURL,
          })
        })
      })
      // console.log(getDownloadURL, 'inininini')
      
      
      toast.success('product added successfully')
      navigate('/dashboard/all-product')
      setLoading(false)

    }catch(error){
      console.log(error)
      setLoading(false)
    }

    // console.log(product)
  }

  return (
    <div className='lg:mx-40 md:mx-10 mb-20'>
        <div className='mt-10 px-40'>
          <div className='text-3xl'>
            Add Product
          </div>
          {
            loading ? (<h4 className='py-10 text-xl font-semibold'> Loading .....</h4> 
            ):(
              <form className='mt-5 w-full' onSubmit={addProduct}>
            <div className='flex flex-col mt-5'>
              <span className='text-md font-semibold text-orange-400'>Product title</span>
              <input value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required
              type="text" placeholder='Product Name' className='border-2 rounded-lg  p-2 border-black'/>
            </div>
            <div className='flex flex-col mt-5'>
              <span className='text-md font-semibold text-orange-400'>Short Descriptions</span>
              <input value={enterShortDes} onChange={e => setEnterShortDes(e.target.value)} required
              type="text" placeholder='....' className='border-2 rounded-lg  p-2 border-black'/>
            </div>
            <div className='flex flex-col mt-5'>
              <span className='text-md font-semibold text-orange-400'>Description</span>
              <input value={enterDescription} required onChange={e => setEnterDescription(e.target.value)} type="text" placeholder='.....' className='border-2 rounded-lg  p-2 border-black'/>
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col mt-5 '>
                <span className='text-md font-semibold text-orange-400'>Price</span>
                <input value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required type="number" placeholder='$' className='border-2 lg:w-[50rem] rounded-lg  p-2 border-black'/>
              </div>
              <div className='flex flex-col justify-center mt-5 w-40'>
              <span className='text-md font-semibold text-orange-400'>Category</span>
              <select value={enterCategory} onChange={e => setEnterCategory(e.target.value)} required className="border-2 rounded-lg p-2 border-black">
                <option disabled selected> Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
              </div>
             
            </div>
            <div className='flex flex-col mt-5'>
              <span className='text-md font-semibold text-orange-400'>Image</span>
              <input type="file"
               required onChange={e => setEnterImg(e.target.files[0])}  className='border-2 rounded-lg  p-2 border-black'/>
            </div>
          <div className='flex mt-20 '>
              <button type='submit' className="btn  mt-2 flex hover:bg-white hover:text-headingText bg-headingText text-white ">Add product</button>
              </div>
          </form>
            )
            
          }
          
        </div>
    </div>
  )
}

export default AddProduct
