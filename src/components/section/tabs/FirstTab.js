import React, { useState, useEffect } from 'react'
import exit from '../../assets/images/exit.svg'
import { getData } from '../../../api/Api'
import Structure from './Structure'

function FirstTab() {
    const [givenData, setGivenData] = useState()


    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setGivenData(data.data)
        }
        fetchData()
    }, [])




    return (
        <div>
            <div className='bg-[#191B20] flex justify-evenly text-[#808191]'>
                <span>
                    ASSET
                </span>
                <span>
                    AMOUNT
                </span>
                <span>
                    USER ACCOUNT
                </span>
                <span>
                    REFERRAL EARNING
                </span>
            </div>

            <div>
                {
                    givenData && givenData.map((item, index) => {
                        return (
                            <Structure key={item.index} img={item.img} amount={item.amount} asset={item.asset} chain={item.chain} refferal={item.referral_earnings} state={item.state} type={item.type} user={item.user} />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default FirstTab