
import hero from '../assets/images/hero.png'
import React from 'react'
import amazon from '../assets/images/amazon.png'
import lacoste from '../assets/images/lacoste.png'
import obey from '../assets/images/obey.png'
import shopify from '../assets/images/shopify.png'
import lewis from '../assets/images/lewis.png'
import hm from '../assets/images/hm.png'

function LandingPage() {
  return (
    <>
        <div className='bg-[#F4F6F5] flex items-center justify-evenly w-11/12 m-auto sm:ml-5 '>
            <div className=' flex flex-col gap-5'>
                <h1 className='font-black text-5xl capitalize w-16'>Let's explore <span className=' w-20 h-16 bg-[#EBD96B]'>unique</span> clothes.</h1>
                <p className='font-medium'>Live for influential and innovative fashion!</p>
                <button className='bg-black text-white h-8 rounded-md w-20 text-sm'>Shop now</button>
            </div>
            <div>
                <img className='sm:w-full' src={hero} alt="heroImg" />
            </div>
        </div>
        <div className='bg-[#EBD96B] flex items-center h-20 justify-evenly sm:overflow-hidden sm:mt-5'>
            <img src={lacoste} alt="lacosteLogo" />
            <img src={obey} alt="obeyLogo" />
            <img src={shopify} alt="shopifyLogo" />
            <img src={lewis} alt="paydayLogo" />
            <img src={hm} alt="hmLogo" />
            <img src={amazon} alt="amazonLogo" />

        </div>
    </>
  )
}

export default LandingPage