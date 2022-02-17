import React from 'react'
import { BiDownArrow } from 'react-icons/bi';
import { RiWallet3Line } from 'react-icons/ri';
import Feebox from './feebox/Feebox';
import RewardBox from './RewardBox';
import Tabs from './tabs/Tabs';
import TutorialBox from './TutorialBox';

function Section() {
  return (
    <div className='w-[55%] px-6 py-3 max-h-[150vh] overflow-hidden border-r-[1.5px] border-[#242731] font-poppins'>

      <div className='flex justify-between items-center px-3'>
        <h3 className='text-white border-b-[2px] p-1 border-[#3772ff]'>
          Section
        </h3>
        <button type="button" className="text-white bg-[#353945] font-medium border-[1px] px-5 rounded-lg text-sm py-2 text-center inline-flex items-center mr-2">
          <RiWallet3Line className="mr-2 -ml-1 w-5 h-5" />
          0.2 $XYZ
        </button>
      </div>

      <div className='mt-5'>
        <TutorialBox />
      </div>
      <div className='mt-5'>
        <RewardBox />
      </div>
      <div className='mt-5'>
        <Feebox />
      </div>
      <div className='mt-5'>
        <Tabs />
      </div>

    </div>
  )
}

export default Section