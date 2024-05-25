import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


export default function App() {
  const [user, setUser] = React.useState(false)
  
    React.useEffect(() => {
      const getUser = async () => {
        const res = await fetch('/api/auth/login')
        const data = await res.json()
        if (data.username) {
          setUser(true)
          }
          }
          getUser()
          }, [])


  return (
   <BrowserRouter>
        <Topbar />
       <Routes>
        <Route >
          <Route page='/'  index element={<Home /> } />

          <Route path='/write' element={setUser ? <Write /> : <Register /> } />


          
          <Route path='/settings' element={setUser? <Settings /> : <Register />} />

          
          <Route path='/login' element={user ? <Home /> : <Login />} />

          
          <Route path='/register' element={ user ? <Home /> : <Register />} />


         <Route path='/post/:postId' element={< Single/>}/>

        </Route>
       </Routes>
   
   </BrowserRouter>
  )
}
