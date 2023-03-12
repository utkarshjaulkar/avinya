import React from 'react'
import Navbar from '../Navbar/Navbar'
import './RegisterMain.css'

const RegisterMain = () => {
  return (
    <>
      <Navbar />
      <div className="registration-details">
        <div className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          culpa? Accusamus debitis itaque nobis fugiat blanditiis veritatis
          dignissimos. Veritatis enim obcaecati quidem dolor iusto doloremque
          architecto velit distinctio. Temporibus, dolorem!
        </div>
        <div className="register-option">
          To register for guest lecture
          <button className="s-register">Click here</button>
        </div>
        <div className="register-option">
          To register for Event
          <button className="e-register">Click here</button>
        </div>
      </div>
    </>
  )
}

export default RegisterMain
