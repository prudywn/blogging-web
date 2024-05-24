import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
   <BrowserRouter>
       <Routes>
        <Route >
          <Route page='/'  index element={<Home />} />
          <Route path='/about' element={<About />} />
          

        </Route>
       </Routes>
   
   </BrowserRouter>
  )
}
