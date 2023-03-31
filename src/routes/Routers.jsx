import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Singup from '../pages/Singup'
import Cart from '../pages/Cart'
import ProtectedRoute from './ProtectedRoute'

import AddProduct from '../admin/AddProduct'
import AllProduct from '../admin/AllProduct'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
      <Route path='home' element={
      <Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='product-details/:id' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='singup' element={<Singup/>}/>

      <Route path='/*' element={<ProtectedRoute/>}>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/user' element={<Users/>}/>
        <Route path='dashboard/all-product' element={<AllProduct/>}/>
        <Route path='dashboard/add-product' element={<AddProduct/>}/>
      </Route>

  </Routes>
    
}

export default Routers
