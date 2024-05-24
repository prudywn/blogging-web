import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
//import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


export default function App() {
  return (
   <BrowserRouter>
        <Topbar />
       <Routes>
        <Route >
          <Route page='/'  index element={<Home />} />
          
          
          <Route path='/write' element={<Write />} />
          
          <Route path='/settings' element={<Settings />} />
          
          <Route path='/login' element={<Login />} />
          
          <Route path='/register' element={<Register />} />



        </Route>
       </Routes>
   
   </BrowserRouter>
  )
}
