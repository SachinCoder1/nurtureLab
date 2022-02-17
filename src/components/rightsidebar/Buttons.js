import React from 'react'
import { MdExitToApp } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Buttons() {
    return (
        <div>
            <button class="bg-[#3772ff] hover:bg-[#3065e0] text-white font-bold py-1 px-4 rounded-lg inline-flex items-center">
                <FaExternalLinkAlt style={{ fontSize: "20px" }} className='mr-1' />
                <span>Custom Link</span>
            </button>
            <button class="bg-transparent text-white font-bold py-1 px-4 rounded-lg inline-flex items-center">
                <MdExitToApp style={{ fontSize: "20px" }} className='mr-1' />
                <span>Exit</span>
            </button>
        </div>
    )
}

export default Buttons