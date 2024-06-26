import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedin ,FaInstagram} from "react-icons/fa";



const Header = () => {
  return (
    <header className='py-3 bg-hbg'>
      <div className="max-w-container mx-auto">
    <div className="lg:flex">
    <div className=" w-full sm:w-full lg:w-1/4">
            <div className="flex items-center lg:justify-start justify-center relative after:absolute after:top-0 after:right-[30px] after:content-[''] 
            after:h-[20px] after:w-[2px] lg:after:bg-[red] after:bg-none">
              <CiMail className='text-white mr-2'/>
              <p className='font-pops text-white'>mail@yourcompany.com</p>
            </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/4">
          <div className="flex items-center lg:justify-start justify-center lg:py-0 py-3">
            <MdOutlinePhone className='text-white mr-2'/>
            <p className='font-pops text-white'>+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/2">
          <div className="flex lg:justify-end justify-center items-center h-full gap-x-6">
             <FaFacebookF className='text-white'/>
             <FaTwitter className='text-white'/>
             <FaLinkedin className='text-white'/>
             <FaInstagram className='text-white'/>
          </div>
        </div>
    </div>
    </div>
    </header>
  )
}

export default Header