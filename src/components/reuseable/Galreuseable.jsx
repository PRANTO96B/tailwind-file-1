import React from 'react'

const Galreuseable = ({gal}) => {
  return (
     <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={gal} className='w-full' alt="Gal" />
    </div>
  )
}

export default Galreuseable