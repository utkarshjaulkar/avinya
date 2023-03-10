import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-content text-center">
              <a href="#">
                <img src="./images/logo1.png" alt="logo" />
              </a>
              <p>Department of Computer Engineering JSPM's RSCOE </p>
              <div class="hr"></div>
              <h6>
                JSPM Rajarshi shahu college of engineering , Tathawade, Service
                Rd, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
              </h6>
              <h6>
                +01 2345 6789 12<span>|</span>+01 2345 6789 12
              </h6>
              <div className="footer-social-icon">
                <span></span>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="./images/insta.png" alt="" />
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  <img src="./images/discord.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright &copy; {new Date().getFullYear()} <span></span>
          <img src="./images/logo1.png" alt="logo" /> All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer
