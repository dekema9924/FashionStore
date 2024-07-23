import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';


function Header() {

  const [isactive, setactive] = useState(false);

  const HandleSideBar = () => {
    setactive((prev) => !prev)
    console.log(isactive)
  }


  return (
    <>
      <header className='flex items-center justify-between h-20 '>
        <div className='flex items-center gap-2 ml-10 '>
          <img src={logo} alt="logoImg" />
          <p className='font-black text-xl uppercase'>Fashion</p>
        </div>
        <ul className='flex gap-3 mr-10 text-gray-700 sm:hidden'>
          <li className='cursor-pointer'>CATALOGUE</li>
          <li>FASHION</li>
          <li>FAVOURITE</li>
          <li>LIFESTYLE</li>
          <button className='bg-black text-white text-xs w-20 rounded-md'>SIGN UP</button>
        </ul>
        {!isactive ? <Box className="hidden sm:flex"><MenuSharpIcon onClick={HandleSideBar} className='cursor-pointer mr-10 sm:ml-32' /></Box> : <CloseIcon onClick={HandleSideBar} className='cursor-pointer mr-10 sm:ml-32 ' />}

        <ul className=' flex-col gap-3 text-white bg-[#EBD96B] fixed -top-5 left-11/12 mt-5 pl-32 w-full justify-center h-96 transition-all duration-700 hidden sm:flex' style={{ left: isactive ? "0" : "800px" }}>
          <div className=' sm:relative sm:bottom-16 left-40'>
            <CloseIcon onClick={HandleSideBar} className='cursor-pointer mr-10 sm:ml-10 text-black' />

          </div>
          <li className='cursor-pointer sm:w-fit hover:text-black'>CATALOGUE</li>
          <li className='cursor-pointer sm:w-fit hover:text-black'>FASHION</li>
          <li className='cursor-pointer sm:w-fit hover:text-black'>FAVOURITE</li>
          <li className='cursor-pointer sm:w-fit hover:text-black'>LIFESTYLE</li>
          <button className='bg-white text-black text-xs w-20 rounded-md hover:bg-yellow-400 transition-all delay-75'>SIGN UP</button>
        </ul>

      </header>
    </>
  )
}

export default Header