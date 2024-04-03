import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banbg bg-no-repeat bg-center bg-cover py-[40px] lg:py-[257px] relative z-10 
    after:absolute after:content-[""] after:top-0 after:left-0 after:w-full after:h-full bg-[rgba(0,0,0,0.06)] after:-z-10'>
        <div className="max-w-container mx-auto">
            <h2 className='text-white font-pops justify-center font-bold lg:text-[64px] lg:leading-[96px] lg:w-[842px]'>We exist since 1975 on the oil and gas industry.</h2>
            <button className='py-[14px] px-[41px] bg-[#F40404] mt-6'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Banner