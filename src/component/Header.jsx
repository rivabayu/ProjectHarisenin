import React from 'react'
import Logo from '../assets/images/logo.png'
import userIcons from '../assets/images/user-icon.png'

import { Link } from 'react-router-dom'
import {MdOutlineFavoriteBorder,MdOutlineShoppingBag} from 'react-icons/md'


const Header = () => {
  return (<header>
    <div className="navbar z-50 fixed bg-base-100 px-20 lg:px-40 py-3 lg:py-5">
  <Link to='/home' className="flex-1">
    <img src={Logo} className='w-10' alt="logo" />
    <div  className="btn btn-ghost normal-case text-xl">ID Barkas</div>
  </Link>
  <div className='flex-1 gap-4'>
    <div className='font-semibold'>Shop</div>
    <div className='font-semibold'>Cart</div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <MdOutlineFavoriteBorder className='text-2xl'/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View WishList</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <MdOutlineShoppingBag className='text-2xl'/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userIcons} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
</div>
  </header>
  )
}

export default Header
