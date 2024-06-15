import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import About from './pages/about/Explore'
//import { PostProvider } from './pages/write/PostContext'
import {PostsProvider} from './components/contexts/PostContext';
//import Sidebar from "./components/sidebar/Sidebar";
import Posts from "./components/posts/Posts";
import { NotificationProvider } from './components/contexts/Notification';
import NotificationList from './components/notifications';



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
    <NotificationProvider>
      <NotificationList />
    <PostsProvider>
   <Router>
        <Topbar />
        
       <Routes>

         <Route path='/'  index element={<Home /> } />
          <Route path='/write' element={setUser ? <Write /> : <Register /> } />
          <Route path='/settings' element={setUser? <Settings /> : <Register />} />

          <Route path='/login' element={user ? <Home /> : <Login />} />

          <Route path='/register' element={ user ? <Home /> : <Register />} />
          
          <Route path='/about' element={setUser ? <About /> : <Register/>} />

         <Route path='/read/:id' element={< Single/>}/>
         <Route path='/posts/:category' element={<Posts/>}/>

        </Routes>
   
   </Router>
   </PostsProvider>
   </NotificationProvider>
   
  )
}
