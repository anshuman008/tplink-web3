import React from 'react'

const ActiveTab = ({tabName} : {tabName:string}) => {
  return (
    <div className='w-full h-40 bg-gray-400 flex justify-center items-center'>
      <span>{tabName}</span>
    </div>
  )
}

export default ActiveTab