import React from 'react'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import './RegisterMain.css'

const RegisterMain = () => {
  return (
    <>
      <Navbar />
      <div className="registration-details">
        <div className="details">
          <h2> Registration fee for Contest:- ₹100/- per group</h2> <br />
          <h2>Registraion fee for Guest lecture:- ₹50/- per head</h2>
        </div>
        <div className="register-links">
          <div className="register-option">
            <p>
              To register for Guest Lecture
              <br /> By Shridhar Mankar (5 minutes Engineering)
            </p>
            <NavLink to="/registerS" style={{ textDecoration: 'none' }}>
              <button className="s-register">Click here</button>
            </NavLink>
          </div>
          <div className="register-option">
            <p> To register for Contest</p>
            <NavLink to="/registerE" style={{ textDecoration: 'none' }}>
              <button className="e-register">Click here</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterMain
