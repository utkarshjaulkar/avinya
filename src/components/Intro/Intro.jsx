import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import './Intro.css'

const Intro = () => {
  return (
    <>
      <div className="intro-main">
        <div className="intro-logo">
          <Spline scene="https://prod.spline.design/hHdAjRRp1WGxJoBw/scene.splinecode" />
        </div>
        <div className="intro-info">
          <h1>What is Avinya ?</h1>
          <p>
            Avinya is a two-day technical event sponsored by Innovision that was
            initiated by the department of computer engineering. This includes a
            coding competition, hands-on workshops in different fields, and
            expert sessions. Throughout these two days, various areas of the
            computer industry will be highlighted.
          </p>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button className="reg-button" style={{ textDecoration: 'none' }}>
              {' '}
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Intro
