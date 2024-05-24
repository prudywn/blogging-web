import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">
            Login
        </span>
        <form className="loginForm">
            <label htmlFor="username">
                Username
                </label>
            <input className='loginInput' type="text" placeholder='Enter your username...' />  
            
            <label htmlFor="email">
                Email
                </label>
            <input className='loginInput' type="email" placeholder='Enter your email...' />  
            
            <label htmlFor="password">
                Password
                </label>
            <input className='loginInput' type="passwords" placeholder='Enter your passwords...' />  

        <button className='loginButton'>
            Login
        </button>

        </form>

        <button className='loginRegisterButton'>
            Register
        </button>
    </div>
  )
}
