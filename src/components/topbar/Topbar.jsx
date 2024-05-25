
import { Link } from "react-router-dom"
import  "./Topbar.css"
//import Search from "../search/Search"

//import { hover } from "@testing-library/user-event/dist/hover"

export default function Topbar() {
  const user = false
  return (
    <div className="top">
       <div className="topLeft">
       
        <Link className="link" to={'/settings'}><i className="topIcon fa fa-cog"></i></Link>
       
       <i className="topIcon fab fa-facebook-square"></i>
       <i className="topIcon  fa-brands fa-square-twitter"></i>
       <i className="topIcon  fa-brands fa-square-instagram"></i>
       <i className="topIcon  fa-brands fa-tiktok"></i>
       </div>

       <div className="topCenter">
        <ul className="topList">
         <li className="topListItem">
           <Link className="link" to={'/'} >HOME </Link>
         </li>
         <li className="topListItem">
          <Link className="link" >
            ABOUT
          </Link>
         </li>
         <li className="topListItem">
          <Link className="link">
            CONTACT
          </Link>
         </li>
         <li className="topListItem">
          <Link className="link" to={'/write'}>
            WRITE
          </Link>
         </li>
         <li className="topListItem">
          {user && 'LOGOUT'}
         </li>
        </ul>
       </div>

       <div className="topRight">
        {user ? (
          <img 
        className="topImg"
        src="https://images.pexels.com/photos/20234108/pexels-photo-20234108/free-photo-of-man-taking-a-picture-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        ):
        (
          <ul className="topList">
            <li className="topListItem">
        <Link className="link" to={'/login'}>LOGIN</Link>
        </li>
        <li>
        <Link className="link" to={'/register'}>REGISTER</Link>
        </li>
        </ul>
      )
        }
        {/* <Search icon = {<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>} data={['apple, banana']}/> */}
        
        </div>
    </div>
  )
}
