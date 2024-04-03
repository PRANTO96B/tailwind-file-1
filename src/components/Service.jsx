import React from 'react'
import SerOne from "../assets/SerOne.png"

const Service = () => {
  return (
  <div className="flex">
    <div className="w-1/2">
        <h3>Our Services</h3>
        <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout.</p>
    </div>
    <div className={`bg-[url('..${SerOne}')] w-1/2`}>
          <h2>hello</h2>
    </div>
  </div>
  )
}

export default Service