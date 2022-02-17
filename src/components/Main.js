import React from 'react'
import Right from './rightsidebar/Right'
import Section from './section/Section'
import Sidebar from './sidebar/Sidebar'
import TopBar from './TopBar'

function Main() {
    return (
        <>
          <TopBar />
            <div className='min-w-full flex p-1 bg-[#000000] font-poppins'>
                <Sidebar />
                <Section />
                <Right />
            </div>
        </>
    )
}

export default Main