import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </div>
  )
}

export default App
