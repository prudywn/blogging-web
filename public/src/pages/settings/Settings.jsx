
import './settings.css'
//import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState} from 'react'

export default function Settings() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePic: null,
  })
  const handleChange = (e) => {
    const {name, value, files} = e.target
    setFormData({
      ...formData,
      [name]:files ? files[0]: value,
    })
  }

  const  handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div>   
       <div>
         <img src='https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp' alt="" style={{width:'70%', margin:'10px', padding:'10px'}}/>
      </div>
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  
                  <span className="settingsDeleteTitle">Delete Account</span>

                </div>

                <form className="settingsForm" onSubmit={handleSubmit}>
                  <label>Profile Picture
                  <input type="file" name="profilePic" accept='image/*' onChange={handleChange}/></label>
                  {formData.profilePic && (
                    <div  className="settingsProfile">
                    <img src={URL.createObjectURL(formData.profilePic)} alt="profilePic" style={{width:'100px', height:'100px'}}/>
                    <label htmlFor="fileInput">
                      <i className=" settingsProfilePicIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                    </div>
                  )}

                  <label htmlFor="userName">Username</label>
                  <input value={formData.username} name='username' type="text" placeholder='Your name...' onChange={handleChange}/>
                  
                  <label htmlFor="email">Email</label>
                  <input value={formData.email} name='email' type="email" placeholder='Your email...' onChange={handleChange} />
                  
                  <label htmlFor="passwd">Password</label>
                  <input value={formData.password} name='password' type="password"  onChange={handleChange}/>

                  

                  <button className='settingsSubmit' >Update</button>
                </form>
            </div>
              {/*  <Sidebar />  */}
        </div>
    </div>
  )
}
