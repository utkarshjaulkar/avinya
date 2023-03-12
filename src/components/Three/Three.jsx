import React from 'react'
import Spline from '@splinetool/react-spline'

import './Three.css'

const Three = () => {
  return (
    <>
      <div className="three-flex">
        <div className="three-title">
          <p>
            Department of Computer Engineering <span /> <span />
            <br />
            Jspm's RSCOE <span />
            <br />
            Brings You
          </p>
          <p>
            <img src="./images/logo2.png" />
          </p>
        </div>
        <div className="three-main">
          <Spline scene="https://prod.spline.design/VwQC3wZYw-04IV7B/scene.splinecode" />
        </div>
      </div>
    </>
  )
}

export default Three
