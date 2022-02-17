import React, { useState, useEffect } from 'react'
import exit from '../../assets/images/exit.svg'


function Structure({ img, amount, asset, chain, refferal, state, type, user }) {

    const [concatinate, setconcatinate] = useState("")




    useEffect(() => {

        const func = async () => {
            const firstFive = await user.slice(0, 5)
            const lastSeven = await user.substr(-7)
            setconcatinate(firstFive + ".." + lastSeven);
        }

        func()

    }, [concatinate])






    return (
        <div className='flex justify-evenly text-white items-center'>
            <div className='text-white flex items-center'>
                <img className='mr-2' src={img} alt="img" />
                <div className='flex flex-col justify-center'>
                    <span>{asset}</span>
                    <div className='flex items-center'>
                        <span className='text-[#808191] mx-1'>{type}</span>
                        <span className='flex items-center bg-[#353945] text-white rounded-lg text-[11px] px-1'>
                            <img className='mr-1' src={chain.img} alt="" /> {chain.name}
                        </span>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span>{amount} BNB</span>
                <span className='text-[#808191]'>{state}</span>
            </div>
            <div>
                <span className='text-white'>{concatinate}</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span>{refferal}</span>
                <span className='flex ml-3 text-[#808191] text-[15px] py-1 px-1'>View on BSC Scan <img className='cursor-pointer' src={exit} alt="exit" /> </span>
            </div>
        </div>
    )
}

export default Structure