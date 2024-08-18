'use client'
import React, { useState } from 'react'
import ActiveTab from './ActiveTab';

const data = ['Send', 'Add Funds', 'Withdraw', 'Swap']


const Tabs = () => {

    const [curresntTab, setCurrentTab] = useState('Send');
    return (

        <div className='flex flex-col gap-y-10 w-full justify-center items-center' >
            <div className='flex gap-3 '>
                {
                    data.map((tb, index) => (<span onClick={() => setCurrentTab(tb)} className={`p-3 w-[200px] text-center px-10 ${tb === curresntTab ? 'bg-blue-500' : 'bg-gray-500'} text-white rounded-lg cursor-pointer`} key={index}>{tb}</span>))
                }
            </div>

            <ActiveTab tabName={curresntTab}/>
        </div>

    )
}

export default Tabs