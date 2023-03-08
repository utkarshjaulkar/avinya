import React from 'react'
import Spline from '@splinetool/react-spline'

import './Three.css'

const Three = () => {
  return (
    <>
      <div className="three-flex">
        <div className="three-title">
          <p>Department of Computer Engineering Jspm's RSCOE Brings You</p>
          <p>AVINYA'23</p>
        </div>
        <div className="three-main">
          <Spline scene="https://prod.spline.design/VwQC3wZYw-04IV7B/scene.splinecode" />
        </div>
      </div>
    </>
  )
}

export default Three
