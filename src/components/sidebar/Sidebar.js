// import React from 'react'

// function Sidebar() {
//     return (
//         <div className='w-[20%] border-r-[1.5px] border-[#242731]'>
//             Sidebar
//         </div>










import React from 'react';
import { HiOutlineSearch, HiTicket, HiX } from 'react-icons/hi';
import { BsArrowLeft } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { links } from './Data';
import BottomBtn from './BottomBtn';
// import { useGlobalContext } from './context';

const Sidebar = () => {
    // const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div className="flex h-screen overflow-y-auto justify-between flex-col bg-transparent w-[20%] border-r-[1.5px] border-[#242731] px-4 py-4 min-h-screen relative">
            <h2 className="flex items-center px-4 -mx-2 mt-2 text-3xl font-semibold text-gray-800">
                <div className="h-9 w-9 p-4 mx-2 object-center object-cover rounded-full bg-[#3772ff] text-white flex items-center justify-center">N</div>
                <span className="text-white ml-1">Name</span>
                <span className='ml-[38px]'><BsArrowLeft style={{ color: 'white' }} /></span>
            </h2>
            <div className="flex flex-col mt-6  justify-between flex-1 font-poppins">
                <nav className="text">
                    {links.map((link, index) => {
                        const { id, url, text, icon } = link;
                        return (
                            <a
                                key={id}
                                href={url}
                                className={`capitalize flex items-center px-3 py-2 ${index === 0
                                    ? 'bg-[#353945] text-[#d9dae2]'
                                    : null
                                    } ${index > 0
                                        ? 'mt-2 text-[#808191] font-semibold hover:bg-[#353945] hover:text-[#b6b7c4] transition-colors duration-200 transform'
                                        : null
                                    } rounded-md`}
                            >
                                {icon}
                                <span className="mx-4 font-[18px]">
                                    {text}
                                </span>
                            </a>
                        );
                    })}

                </nav>
            </div>

   <div className='text-white'>
       <BottomBtn />
   </div>

        </div>
    );
};

export default Sidebar;
