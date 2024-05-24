import './register.css'


export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">
            Sign Up 
        </span>
        <form className="registerForm">
            <label htmlFor="username">
                Username
                </label>
            <input className='registerInput' type="text" placeholder='Enter your username...' />  
            
            <label htmlFor="email">
                Email
                </label>
            <input className='registerInput' type="email" placeholder='Enter your email...' />  
            
            <label htmlFor="password">
                Password
                </label>
            <input className='registerInput' type="passwords" placeholder='Enter your passwords...' />  

        <button className='registerButton'>
            Register
        </button>

        </form>

        <button className='registerLoginButton'>
           Login
        </button>
    </div>
  )
}
