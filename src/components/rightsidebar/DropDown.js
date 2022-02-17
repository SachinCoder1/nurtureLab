import React from 'react'
import { CgAdidas } from 'react-icons/cg';
import { BiDownArrow } from 'react-icons/bi';
import { RiWallet3Line } from 'react-icons/ri';
function DropDown() {
    return (
        <div className='flex justify-around items-center'>
            <button type="button" className="text-white bg-[#353945] hover:bg-[#353945] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-2">
                <CgAdidas className="mr-2 -ml-1 w-5 h-5" />
                Avalanche
                <BiDownArrow className="ml-2" />
            </button>
            <button type="button" className="text-white bg-transparent font-medium border-[1px] px-5 border-[#3772ff] rounded-lg text-sm py-2 text-center inline-flex items-center mr-2">
                <RiWallet3Line className="mr-2 -ml-1 w-5 h-5" />
                0xf6...1353
                <BiDownArrow className="ml-2" />
            </button>
        </div>
    )
}

export default DropDown