import React from 'react'
//import Write from './pages/write/Write'
//import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
//import Home './pages/home/Home'

import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  const user = false

  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route>
        <Route path="/" index element={<Home />} />
        
        <Route path="/register" element={user? <Home/> :<Register />} />

        <Route path="/login" element={user ? <Home/> : <Login />} />

        <Route path='/write' element={user ? <Write/> : <Register />} />

        <Route path='/settings' element={user ? < Settings/> :  <Register />} />

        <Route path='/posts/:postId' element={<Single/>} />
 

      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}
