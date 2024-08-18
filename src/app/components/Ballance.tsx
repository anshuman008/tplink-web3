import React from 'react'

const Ballance = ({publicKey}:{publicKey:string}) => {
  return (
    <div className='w-full flex justify-between items-center'>

        {/* balance  */}
        <div className='flex gap-3 justify-center items-end'>
        <span className='text-white font-bold text-5xl'>$0.00</span>
        <span className='text-white font-bold text-3xl'>USD</span>
        </div>

        {/* wallet address  */}

        <div>
             <span className='p-3 bg-gray-500 text-white cursor-pointer rounded-xl'>{publicKey}</span>
        </div>
    </div>
  )
}

export default Ballance