import React, { useRef, useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import userIcons from '../assets/images/user-icon.png'

import { Link, useNavigate } from 'react-router-dom'
import {MdOutlineShoppingBag} from 'react-icons/md'
import useAuth from '../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Header = () => {
  
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const [bgHeader, setBgHeader] = useState(false);
  const {currentUser} = useAuth()

  const logout = () => {
    signOut(auth).then(()=>{
      toast.success('Logged Out')
      navigate('/login')
    }).catch(erorr =>{
      toast.error(erorr.message)
    })
   }

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 100 ? setBgHeader(true) : setBgHeader (false)
    })
  })

  return (<header>
    <div className={`${bgHeader ? 'bg-cartBg3  shadow-xl' : 'bg-white shadow-none' } navbar z-50 fixed bg-base-100 px-5 md:px-20 lg:px-40 py-3 lg:py-5 transision-all duration-500`}>
  <Link to='/home' className="flex-1">
    <img src={Logo} className='w-10' alt="logo" />
    <div  className="btn btn-ghost normal-case text-xl">ID Store</div>
  </Link>
  <div className='flex-1 gap-4'>
    
  </div>
  <div className="flex-none">
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
          <img src={currentUser ? currentUser.photoURL : userIcons} alt="" />
        </div>
      </label>
      
      <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
   
        {
          currentUser ? 
          <li onClick={logout}><a>Logout</a></li> :<div>
            <Link to='/login'>
              <li className='hover:bg-headingText hover:text-white rounded-lg'><a>Login</a></li>
            </Link>
            <Link to='/singup'>
              <li className='hover:bg-headingText hover:text-white rounded-lg'><a>Signup</a></li>
            </Link>
         
          </div>
        }
      </ul>
    </div>
    <div>
    {
            currentUser ? <p>Hi {currentUser.displayName}</p>  : <p>Hi</p>
          }
    </div>
  </div>
</div>
  </header>
  )
}

export default Header
