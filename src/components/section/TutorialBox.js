import React from 'react'
import coinImage from '../assets/images/coinimage.jpg'

function TutorialBox() {
    return (
        <div className='relative bg-[#ABE8FF] rounded-lg px-5 py-3 font-poppins'>
        <img className='absolute right-[20px] w-[12%] object-cover' src={coinImage} alt="coin-image" />
            <p className='text-[#2B2557]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button class="bg-white text-[#2B2557] font-bold py-1 px-4 rounded-full inline-flex items-center">
                <span>Download</span>
            </button>

        </div>
    )
}

export default TutorialBox