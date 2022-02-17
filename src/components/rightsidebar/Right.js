import React from 'react'
import DropDown from './DropDown'
import { BiArrowBack } from 'react-icons/bi';
import Buttons from './Buttons';


function Right() {
  return (
    <div className='w-[25%] px-3 py-2 font-poppins'>
      <div className='flex justify-center mt-5'>
        <DropDown />
      </div>
      <div className='text-white flex items-center mt-5 mb-4 cursor-pointer'>
        <BiArrowBack /> <span className='px-2'>
          Custom Link
        </span>
      </div>
      <div className='text-white px-2 py-2'>
        https://testnet.xyz.xyz/trade?ref=
      </div>
      <div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input className="appearance-none mt-3 block w-full bg-[#353945] text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#2f2f31]" id="grid-first-name" type="text" placeholder="Enter" />
        </div>
      </div>
      <div className='mt-8 ml-6'>
        <Buttons />
      </div>
    </div>
  )
}

export default Right