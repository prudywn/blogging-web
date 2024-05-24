import './register.css'
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const history = useNavigate();

   const handleRegister = (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
        alert("Passwords do not match");
        } else {
            localStorage.setItem('user', JSON.stringify({username, password}))
            history('/login');
   }}

  return (
    <div className='register'>
        <span className="registerTitle">
            Sign Up 
        </span>
        <form className="registerForm" onSubmit={handleRegister}>
            <label htmlFor="username">
                Username
                </label>
            <input value={username} className='registerInput' type="text" placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value) }/>
            
            <label htmlFor="email">
                Email
                </label>
            <input value={email} className='registerInput' type="email" placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value) }/>
            
            <label htmlFor="password">
                Password
                </label>
            <input value={password} className='registerInput' type="password" placeholder='Enter your passwords...' onChange={(e) => setPassword(e.target.value)  }/> 
            
            <label htmlFor="password">
                Confirm Password
                </label>
            <input value={confirmPassword} className='registerInput' type="password" placeholder='Enter your password...' onChange={(e) => setConfirmPassword(e.target.value)  }/> 

        <button className='registerButton'>
            Register
        </button>

        </form>

        <button className='registerLoginButton'>
          <Link className='link' to={'/login'}>Login</Link> 
        </button>
    </div>
  )
}
