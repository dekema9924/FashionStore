import React from 'react'
import playstorebtn from '../assets/images/googleplay.png'
import applestorebtn from '../assets/images/applestore.png'
import mobileapp from '../assets/images/mobileapp.png'



function Mobile() {
  return (
    <>
        <div className='flex items-center w-11/12 m-auto justify-center gap-20 '>
            <div className='flex flex-col gap-7 sm:relative sm:left-36 z-40'>
                <p className='font-black text-2xl w-52 '>Download app & get the voucher!</p>
                <p className='font-thin w-72'>Get 30% off for first transaction using
                    Rondovision mobile app for now.
                </p>
                <div className='flex gap-2'>
                    <img src={applestorebtn} alt="applebtn" />
                    <img src={playstorebtn} alt="playstorebtn" />
                </div>
            </div>
                <img className='w-64 sm:relative right-32 bottom-16 opacity-55' src={mobileapp} alt="mobileImg" />
        </div>
    </>
  )
}

export default Mobile