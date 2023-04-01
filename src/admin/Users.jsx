import React from 'react'
import {db} from '../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import {toast} from 'react-toastify'
import useGetData from '../custom-hooks/useGetData'
import AdminNav from './AdminNav'


function Users() {
    const {data: usersData, loading} = useGetData('users')

    const deleteUser = async (id) =>{
        await deleteDoc(doc(db, 'users', id))
        toast.success('delete users succesfully')
    }
  return (
    <>
  
    <section className='mx-20 lg:mx-40 mt-10 mb-[29rem]'>
    <div className='flex justify-center '>
    <div className='w-[45rem] lg:w-[70rem] gap-10'>
      <div className='border-b-4 flex text-lg font-bold '>
       <span className='w-[25rem] flex '>Image</span>
       <span className='w-[20rem]'>Username</span>
       <span className='w-[20rem] text-end'>Email</span>
       <span className='w-[20rem] text-end'>Delete</span>
      </div>
   <div>{loading ? (
      <div className='text-xl font-semibold'>
        <progress className="progress w-56"></progress>Loading........</div>  
       ) : ( usersData.map(item =>(
       <div  className='flex border-b-2' key={item.uid}> 
           <span className='w-[25rem] flex justify-start'>
             <img src={item.photoURL} className='w-36 pr-5 flex' alt="" />
           </span>
           <span className='w-[20rem]  py-6'>{item.displayName}</span>
           <span className='w-[20rem] text-end py-6' >{item.email}</span>
           <span className='w-[20rem] text-end py-3 flex justify-end'>
            <button onClick={() => {deleteUser(item.id)}} type='submit' className="btn flex hover:bg-white hover:text-headingText bg-headingText text-white ">Delete</button>
           </span>
        </div>) ) )}
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Users
