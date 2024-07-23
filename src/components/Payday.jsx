import payday from '../assets/images/payday.png'
import star from '../assets/images/Star 8.png'

import React from 'react'

function Payday() {
    return (
        <>
            <div className=' bg-gradient-to-b from-[#FAE157] to-[#E0C340] bg-no-repeat h-full flex sm:flex-col items-center'>
                <div>
                    <img src={payday} alt="paydaygirlImg" />
                </div>
                <div className='flex flex-col gap-4 sm:ml-10'>
                    <div>
                        <h1 className='bg-white text-7xl font-black w-fit -rotate-6 uppercase	'>Payday</h1>
                        <p className=' text-7xl font-black'>Sale Now</p>
                    </div>
                    <p>Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </p>
                    <p className='font-bold'>1 June - 10 June 2021</p>
                    <p>*Terms & Conditions apply</p>
                    <button className='bg-black w-20 text-white h-10 text-sm rounded-md mb-10'>Shop now</button>
                </div>

            </div>
        </>
    )
}

export default Payday