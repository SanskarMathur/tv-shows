import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import loginBg from './loginBg.jpg';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { showId } = useParams();
  
  useEffect(()=>{
    setName(JSON.parse(localStorage.getItem('name')))
    setEmail(JSON.parse(localStorage.getItem('email')))
  }, [])
  
  const handleNameChange = (e) => {
    setName(e.target.value)
    setName(e.target.value)
    localStorage.setItem('name', JSON.stringify(name));
    console.log(localStorage.name)

  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    localStorage.setItem('email', JSON.stringify(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    setName("")
    setEmail("")
    // Redirect to show details page
    navigate(`/shows/${showId}`);
  };

  return (
    <div className='form-body'>
      <img src={loginBg} className='form-img' />
      <div className='form-container'>
        <h1 className='form-title'>Booking Form</h1>
        <form onSubmit={handleSubmit} className='form-contents'>
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="showName">SHOW ID:</label>
            <input
              type="text"
              id="showName"
              className="form-control"
              value={showId}
              disabled
            />
          </div>
          <button type="submit" className="btn form-btn" onClick={handleSubmit}>Book Now</button>
        </form>
      </div>
    </div >
  );
}
