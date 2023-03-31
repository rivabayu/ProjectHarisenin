import React from 'react'
import logo from '../assets/images/logo.png'
import { MdNotifications, MdSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div>
        <header className="navbar fixed bg-headingText p-5 lg:px-40">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl gap-3 text-white">
              <img src={logo} className='w-10' alt="" /> ID Store</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div>
              <MdSettings className='text-2xl text-white'/>
            </div>
            <div>
              <MdNotifications className='text-2xl text-white'/>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost ">
                <div className=" rounded-full text-white">Hi, admin
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </header>

        <section className='pt-24 pb-2 flex justify-center  bg-cartBg3'>
          <div className=' w-full justify-center flex'>
            <div className='flex gap-10'>
              <Link to='/dashboard'>
                <div className='font-semibold btn  btn-ghost  p-2 rounded-lg'>
                  Dashboard
                </div>
              </Link>
              <Link to='/dashboard/add-product'>
                <div className='font-semibold btn btn-ghost  p-2 rounded-lg'>
                  add product
                </div>
              </Link>
              <Link to='/dashboard'>
                <div className='font-semibold btn  btn-ghost w-20 p-2 rounded-lg'>
                  oders
                </div>
              </Link>
              <Link to='/dashboard'>
                <div className='font-semibold  w-20 btn-ghost p-2 rounded-lg btn '>
                  user
                </div>
              </Link>
            </div>
            
          </div>

        </section>
    </div>
  )
}

export default AdminNav
