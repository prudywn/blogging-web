// Settings.js
import React, { useState } from 'react';
import axios from 'axios';
import "./settings.css"

export default function Settings() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    const data = new FormData();
    if (formData.username) data.append('username', formData.username);
    if (formData.email) data.append('email', formData.email);
    if (formData.password) data.append('password', formData.password);
    if (formData.profilePic) data.append('profilePic', formData.profilePic);

    try {
      await axios.put('http://localhost:5000/user/update', data, config);
      alert('Profile updated successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input value={formData.username} name="username" type="text" placeholder="Your username..." onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input value={formData.email} name="email" type="email" placeholder="Your email..." onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input value={formData.password} name="password" type="password" placeholder="Your password..." onChange={handleChange} />
          <label htmlFor="profilePic">Profile Picture</label>
          <input name="profilePic" type="file" accept="image/*" onChange={handleChange} />
          {formData.profilePic && (
            <img src={URL.createObjectURL(formData.profilePic)} alt="Profile" style={{ width: '100px', height: '100px' }} />
          )}
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
