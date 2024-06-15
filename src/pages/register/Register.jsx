// Register.js
import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';
import '../register/register.css'

 

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      try {
        await axios.post('http://localhost:5000/auth/register', { username, email, password });
        alert('Registration successful');
        navigate('/login');
      } catch (err) {
        console.error(err);
        alert('Registration failed: ' + (err.response?.data?.message || err.message));
      }
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input value={username} className="registerInput" type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input value={email} className="registerInput" type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input value={password} className="registerInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input value={confirmPassword} className="registerInput" type="password" placeholder="Confirm your password..." onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
}
