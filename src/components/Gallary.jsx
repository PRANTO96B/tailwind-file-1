import React from 'react'
import Gal from "../assets/Gal.png"
import Dal from "../assets/Dal.png"
import Fal from "../assets/Fal.png"
import soykot from "../assets/soykot.png"
import Galreuseable from './reuseable/Galreuseable'

const Gallary = () => {
  return (
  <div className="flex flex-wrap justify-between">
    <Galreuseable gal={Gal}/>
    <Galreuseable gal={Dal}/>
    <Galreuseable gal={Fal }/>
    <Galreuseable gal={soykot}/>
  </div>
  
  )
}

export default Gallary