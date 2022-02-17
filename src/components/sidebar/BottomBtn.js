import React from 'react'
import globeImg from '../assets/images/globe.svg'
import darkmode from '../assets/images/darkmode.svg'

function BottomBtn() {
    return (
        <div className='flex flex-col'>

            <div className='flex justify-around items-center'>
                <div className='bg-[#353945] px-3 rounded-lg py-2'>
                    <span className='bg-[#3772FF] px-2 rounded-full mr-1 text-white text-[14px]'>N</span>
                    <span className='text-white'>$0.90</span>

                </div>
                <div className='bg-[#A3E3FF] px-3 rounded-lg py-2'>
                    <span className='text-[#3772FF]'>Buy $XYZ</span>
                </div>
            </div>
            <div className='flex my-3 items-center'>
                <img className='mr-4' src={globeImg} alt="img" />
                <div className='bg-[#353945] flex items-center justify-center rounded-lg px-2 py-1 mt-2 '>
                <img className='w-[25px]' src={darkmode} alt="darkmode" />
                <span className='bg-[#3772FF] rounded-full w-[25px] h-[25px]'></span>

                </div>
            </div>
        </div>
    )
}

export default BottomBtn