import React from 'react'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <>
      <Navbar />
      {/* <div className="registration-details">
        <div className="details">
          <h2>Registration fee for Event:- ₹100/- per group</h2> <br />
          <h2>Registraion fee for Guest lecture:- ₹50/- per head</h2>
        </div>
        <div className="register-links">
          <div className="register-option">
            <p>To register for guest lecture</p>
            <NavLink to="/registerS" style={{ textDecoration: 'none' }}>
              <button className="s-register">Click here</button>
            </NavLink>
          </div>
        </div>
      </div> */}
      <div className="form-space">
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>Event Registration Form</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbxOyORcBBbh7sQmcdr7bNW9VnDbyqDHH9hKClaMvTTGDJ44S3Ffu3O6LCNaCeMa-4uWqw/exec"
                >
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user-group"></i>
                    </span>
                    <input
                      type="name"
                      name="Group Name"
                      placeholder="Group Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Member 1 Name"
                      placeholder="Member 1 Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Member 2 Name"
                      placeholder="Member 2 Name"
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-solid fa-building-columns"></i>
                    </span>
                    <input
                      type="name"
                      name="College"
                      placeholder="College"
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-solid fa-phone-volume"></i>
                    </span>
                    <input
                      type="name"
                      name="Phone"
                      placeholder="Phone"
                      required
                      pattern="[1-9]{1}[0-9]{9}"
                      maxlength="10"
                    />
                  </div>

                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-sharp fa-solid fa-receipt"></i>
                    </span>
                    <input
                      type="name"
                      name="Transaction Id"
                      placeholder="Transaction Id"
                      required
                    />
                  </div>

                  <div className="payment">
                    <img src="./images/payment.jpg" />
                  </div>

                  <input class="button" type="submit" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
