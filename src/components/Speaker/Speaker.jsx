import React from 'react'
import './Speaker.css'

const Speaker = () => {
  return (
    <section id="speaker">
      <h1>Speakers</h1>
      <div class="container">
        <div class="box">
          <div class="imgBox">
            <img src="./images/portrait.jpg" alt="" />
          </div>
          <div class="content">
            <h2>
              Name
              <br />
              <span>Designation</span>
            </h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBox">
            <img src="./images/portrait.jpg" alt="" />
          </div>
          <div class="content">
            <h2>
              Name
              <br />
              <span>Designation</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speaker
