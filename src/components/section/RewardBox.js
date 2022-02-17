import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

function RewardBox() {
    return (
        <div className='flex justify-between items-center bg-[#191B20] p-4 rounded-lg font-poppins'>
            <div className='text-white'>
                <h4 className='p-3 text-[22px]'>Your rewards</h4>
                <p className='pb-3 px-3 text-[27px] font-semibold'>$ 0.26231428</p>
                <div className='flex px-3'>
                    <button className='ml-1 text-[13px] h-5 rounded-lg bg-[#353945] px-[5px]'>$40 AVAX</button>
                    <button className='ml-1 text-[13px] h-5 rounded-lg bg-[#353945] px-[5px]'>$10 BNB</button>
                    <button className='ml-1 text-[13px] h-5 rounded-lg bg-[#353945] px-[5px]'>$210 BTC</button>
                </div>
            </div>
            <div className='mr-5'>
                <button class="bg-[#3772ff] hover:bg-[#3065e0] text-white font-bold py-1 px-4 rounded-lg inline-flex items-center">
                    <FaExternalLinkAlt style={{ fontSize: "20px" }} className='mr-1' />
                    <span>Custom Link</span>
                </button>
            </div>
        </div>
    )
}

export default RewardBox