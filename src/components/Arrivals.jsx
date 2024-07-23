import arrival_1 from '../assets/images/newarrival-1.png'
import arrival_2 from '../assets/images/newarrival-2.png'
import arrival_3 from '../assets/images/newarrival-3.png'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react'

function Arrivals() {
     return (
          <>
           <p  className='font-black uppercase text-3xl m-16'>New Arrivals <div className='w-20 h-3 bg-yellow-500 rounded-lg  relative left-48 bottom-5 -z-10'></div></p>

               <div className='flex gap-16 w-11/12 justify-center m-auto pb-20 items-center sm:flex-wrap'>
                    <div className='  flex flex-col gap-1'>
                         <img src={arrival_3} alt="girlPhoto" />
                         <div className=' flex items-center justify-between mt-3  '>
                              <p className='font-semibold'>Hoodies & Sweetshirt</p>
                              <ArrowRightAltIcon className='text-gray-500' />
                         </div>
                         <p className='text-gray-500 cursor-pointer'>Explore Now!</p>

                    </div>
                    <div className='  flex flex-col gap-1'>
                         <img src={arrival_2} alt="girlPhoto" />
                         <div className=' flex items-center justify-between mt-3  '>
                              <p className='font-semibold'>Coats & Parkas</p>
                              <ArrowRightAltIcon className='text-gray-500' />
                         </div>
                         <p className='text-gray-500 cursor-pointer'>Explore Now!</p>

                    </div>
                    <div className='flex flex-col gap-1'>
                         <img src={arrival_1} alt="girlPhoto" />
                         <div className=' flex items-center justify-between mt-3  '>
                              <p className='font-semibold'>Tees & T-Shirt</p>
                              <ArrowRightAltIcon className='text-gray-500' />
                         </div>
                         <p className='text-gray-500 cursor-pointer'>Explore Now!</p>

                    </div>
               </div>
          </>
     )
}

export default Arrivals