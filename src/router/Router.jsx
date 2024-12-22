import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Wishlist from '../pages/wishlist/Wishlist'
import Basket from '../pages/basket/Basket'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router