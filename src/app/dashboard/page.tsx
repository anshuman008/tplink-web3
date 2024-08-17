'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = () => {
  const session = useSession();
  
    return (
    <div className='h-screen bg-slate-800 flex justify-center items-center'>
    <h1 className='text-white font-bold text-4xl'>Hello!!!!! {session.data?.user?.name}</h1>
    </div>
  )
}

export default Page