import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
   <>
     <div className='bg-black flex items-center justify-evenly h-72'>
        <div className='flex flex-col gap-4'>
            <p className='font-bold'>Fashion</p>
            <p className='text-gray-400 w-64'>Complete your style with awesome clothes from us.</p>
            <div className='flex gap-5'>
                <FacebookIcon className='rounded-md p-1 bg-[#EBD96B]'/>
                <XIcon className='rounded-md p-1 bg-[#EBD96B]'/>
                <LinkedInIcon className='rounded-md p-1 bg-[#EBD96B]'/>
                <InstagramIcon className='rounded-md p-1 bg-[#EBD96B]'/>
            </div>
        </div>
        <div className='flex gap-20 sm:hidden '>
            <div>
                <p className='text-white'>Company</p>
                <ul className='text-gray-600 list-none text-sm'>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <p className='text-white'>Quik Link</p>
                <ul className='text-gray-600 list-none text-sm'>
                    <li>Share Location</li>
                    <li>Orders Tracking</li>
                    <li>Size Guide</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <p className='text-white'>Legal</p>
                <ul className='text-gray-600 list-none text-sm'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
     </div>
   </>
  )
}

export default Footer