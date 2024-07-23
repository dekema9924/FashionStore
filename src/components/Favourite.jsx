
import young_1 from '../assets/images/young-1.png'
import young_2 from '../assets/images/young-2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Favourite = () => {
    return (
        <>
            <p className='font-black uppercase text-3xl m-16'>Young's Favourite <div className='w-20 h-3 bg-yellow-500 rounded-lg  relative left-56 bottom-5 -z-10 sm:left-24'></div></p>

            <div className='flex gap-16 w-11/12 justify-center m-auto pb-20 items-center'>
                <div className='flex flex-col gap-1'>
                    <img src={young_2} alt="girlPhoto" />
                    <div className=' flex items-center justify-between mt-3  '>
                        <p className='font-semibold'>Trending on instagram</p>
                        <ArrowRightAltIcon className='text-gray-500' />
                    </div>
                    <p className='text-gray-500 cursor-pointer'>Explore Now!</p>

                </div>
                <div className='flex flex-col gap-1'>
                    <img src={young_1} alt="girlPhoto" />
                    <div className=' flex items-center justify-between mt-3  '>
                        <p className='font-semibold'>All under $40</p>
                        <ArrowRightAltIcon className='text-gray-500' />
                    </div>
                    <p className='text-gray-500 cursor-pointer'>Explore Now!</p>

                </div>
            </div>
        </>
    )
}

export default Favourite;