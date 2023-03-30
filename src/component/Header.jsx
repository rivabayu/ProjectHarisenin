import React, { useRef, useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import userIcons from '../assets/images/user-icon.png'

import { Link } from 'react-router-dom'
import {MdOutlineFavoriteBorder,MdOutlineShoppingBag} from 'react-icons/md'

import { useSelector } from 'react-redux'


const Header = () => {
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const [bgHeader, setBgHeader] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 100 ? setBgHeader(true) : setBgHeader (false)
    })
  })

  return (<header>
    <div className={`${bgHeader ? 'bg-cartBg3  shadow-xl' : 'bg-white shadow-none' } navbar z-50 fixed bg-base-100 px-5 md:px-20 lg:px-40 py-3 lg:py-5 transision-all duration-500`}>
  <Link to='/home' className="flex-1">
    <img src={Logo} className='w-10' alt="logo" />
    <div  className="btn btn-ghost normal-case text-xl">ID Barkas</div>
  </Link>
  <div className='flex-1 gap-4'>
    
  </div>
  <div className="flex-none">
    {/* <div className="dropdown dropdown-end">
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
    </div> */}
    <Link to='/shop'>
      <div className='font-semibold btn btn-ghost'>Shop</div>
    </Link>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost ">
        <Link to='/cart'>
          <div className="indicator">
            <MdOutlineShoppingBag  className='text-2xl'/>
            <span className="badge badge-sm indicator-item">{totalQuantity}</span>
          </div>
        </Link>
      </label>
      
    </div>
    <div className="dropdown dropdown-end px-2">
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
