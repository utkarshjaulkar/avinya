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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            dolorem quasi? Porro consequatur culpa nobis beatae praesentium,
            quaerat, accusantium labore qui cum ratione architecto omnis? Dicta
            alias incidunt blanditiis doloribus.
          </p>
          <Link to="/register">
            <button className="reg-button"> Register</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Intro
