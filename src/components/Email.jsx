import React from 'react'

function Email() {
  return (
    <>
       <div className='bg-[#E5C643] h-72 flex flex-col justify-center items-center text-center gap-4 mt-5'>
        <p className='font-bold text-lg text-center w-80 text-white'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
            <p className='text-white w-fit'>Type your email down below and be young wild generation</p>
            <form action="" className='flex items-center sm:w-72'>
                <input className='h-12 w-96 pl-3 rounded-md outline-none sm:ml-16 ' type="email" name="" placeholder='Add your email here' />
                <button className='relative right-24 bg-black w-20 h-10 rounded-md text-white sm:right-5 '>Send</button>
            </form>
       </div>
    </>
  )
}

export default Email