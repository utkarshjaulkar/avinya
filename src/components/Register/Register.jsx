import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Register.css'

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="form-space">
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>Registration Form</h2>
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
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Name"
                      placeholder="Name"
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

                  <div class="input_field select_option">
                    <select name="Event">
                      <option>Select</option>
                      <option>Guest Lecture</option>
                      <option>Competition</option>
                    </select>
                    {/* <div class="select_arrow"></div> */}
                    <i class="fa-solid fa-circle-chevron-down select_arrow"></i>
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
