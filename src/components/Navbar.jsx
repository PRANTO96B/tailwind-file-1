import React, { useState } from 'react'
import doll from "../assets/doll.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let[show , setShow] = useState(false)

  

  return (
    <nav className='bg-[#F40404] py-10'>
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center px-[3px] lg:px-0">
          <div className="">
                <img src={doll} alt="" />
            </div>
            <div className="">
                <ul className={`lg:flex gap-x-6 absolute z-50 lg:static ${show == true ? 'top-[220px] left-0 bg-[green] duration-300 w-full text-center py-5': 'top-[220px] left-[-100%] duration-300 w-full'}`}>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[]' href="#">Home</a></li>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[]' href="#">About</a></li>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[]' href="#">Services</a></li>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[]' href="#">Gallery</a></li>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[]' href="#">Blog</a></li>
                    <li className='lg:py-0 py-2'><a className='text-white font-poppins font-semibold font-[] border-2 p-4 rounded inline-block lg:inline' href="#">Contact</a></li>
                </ul>
            </div>
          <div className="lg:hidden relative z-50" onClick={()=>setShow(!show)}>

             {show == true ? <RxCross2/> : <FaBars/>}


          </div>

          </div>
        </div>
    </nav>
  )
}

export default Navbar