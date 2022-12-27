import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import './style/navbar.css'

import {Home} from './pages/home'
import {Login} from './pages/login'

function App() {
  return (
    <>
      <nav>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Welcome Greetings!</h1>} />
        <Route path='/home/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<><h1>Signup</h1></>} />
        <Route path='/cart' element={<><h1>Cart</h1></>} />
        {/* <Route path='*' element={<h1>Error 404! Not Found</h1>} /> */}
      </Routes>
    </>
  )
}

export default App
