import './settings.css'
//import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div>   
        <div className="settings">
            <div className="settingsWrapper">
                {/* <Sidebar /> */}
                <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  
                  <span className="settingsDeleteTitle">Delete Account</span>

                </div>

                <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsProfile">
                    <img src="" alt="" />

                    <label htmlFor="fileInput">
                      <i className=" settingsProfilePicIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                  </div>

                  <label htmlFor="userName">Username</label>
                  <input type="text" placeholder='Your name...' />
                  
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='Your email...' />
                  
                  <label htmlFor="passwd">Password</label>
                  <input type="password"  />

                  <button className='settingsSubmit'>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}
