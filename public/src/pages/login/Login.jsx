import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const history = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
       
        const storedUser =
        JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password ) {
            history('/');
            } else {
                alert('Invalid username or password');

    }
    }

  return (
    <div className='login'>
        <span className="loginTitle">
            Login
        </span>
        <form className="loginForm" onSubmit={handleLogin}>
            <label htmlFor="username">
                Username
                </label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className='loginInput' type="text" placeholder='Enter your username...' />  
            
            <label htmlFor="email">
                Email
                </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='loginInput' type="email" placeholder='Enter your email...' />  
            
            <label htmlFor="password">
                Password
                </label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='loginInput' type="password" placeholder='Enter your passwords...' />  

        <button className='loginButton'>
            Login
        </button>

        </form>

        <button className='loginRegisterButton'>
            <Link className='link' to={'/register'}>Register</Link>
        </button>
    </div>
  )
}
