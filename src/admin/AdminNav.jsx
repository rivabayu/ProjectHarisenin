import React from 'react'
import logo from '../assets/images/logo.png'
import { MdNotifications, MdSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div>
        <header className="navbar fixed flex bg-headingText p-5 lg:px-40 mb-10">
          <div className="flex-1">
            <Link to='/home'>
            <a className="btn btn-ghost normal-case text-xl gap-3 text-white">
              <img src={logo} className='w-10' alt="" /> ID Store</a>
            </Link>
            
          </div>
          <div className='flex text-white justify-center mr-32'>
              {/* <Link to='/dashboard'>
                <div className='font-semibold btn  btn-ghost  p-2 rounded-lg'>
                  Dashboard
                </div>
              </Link> */}
              <Link to='/dashboard/add-product'>
                <div className='font-semibold btn btn-ghost  p-2 rounded-lg'>
                  add product
                </div>
              </Link>
              <Link to='/dashboard/all-product'>
                <div className='font-semibold btn  btn-ghost p-2 rounded-lg'>
                  All Product
                </div>
              </Link>
              <Link to='/dashboard/user'>
                <div className='font-semibold  w-20 btn-ghost p-2 rounded-lg btn '>
                  user
                </div>
              </Link>
            </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost ">
              <Link to='/dashboard'>
                <div className=" rounded-full text-white">Hi, admin
                </div>
              </Link>
              </label>
            </div>
          </div>
        </header>

        <section className='pt-24 pb-2 flex justify-center  bg-cartBg3'>
          <div className=' w-full justify-center flex'>
          
            
          </div>

        </section>
    </div>
  )
}

export default AdminNav
