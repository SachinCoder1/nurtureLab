import React from 'react'
import moneyBag from '../../assets/images/money-bag.svg'
import ungroup from '../../assets/images/ungroup.svg'
function FeeBody() {

    const copyToClipBoard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // setCopySuccess('Copied!');
        } catch (err) {
            // setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className='bg-[#191B20] px-2 w-[340px] py-3] mr-5'>
            <h4 className='my-2 mx-2 text-white flex items-center'>
                <img className='bg-[#BBB5E2] mr-2 px-2 py-2 rounded-full' src={moneyBag} alt="" />   12.5% of fee
            </h4>
            <p className='text-[#808191] mb-3 mx-2'>
                Your Referral Link for xyz
            </p>
            <div className='bg-[#242731] px-5 py-4 flex items-center rounded-lg'>
                <p className='text-white text-[13px]'>https://unityexchange.design</p>
                <span onClick={() => copyToClipBoard("https://unityexchange.design")}>
                    <img className='mx-2 cursor-pointer' src={ungroup} alt="ungroup" />
                </span>
            </div>
        </div>
    )
}

export default FeeBody