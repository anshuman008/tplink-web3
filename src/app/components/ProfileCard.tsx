'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useState } from 'react'
import Ballance from '../components/Ballance';
import Tabs from '../components/Tabs';

const ProfileCard = ({publicKey}:{publicKey:string}) => {
  const session = useSession();

  return (
    <div className='h-screen bg-black flex justify-center pt-16'>

      <div className=' w-[50%] h-[80%]  bg-[#1c1c1c] rounded-lg flex flex-col items-start p-4 px-7 gap-y-6'>
        <Greeting name={session.data?.user?.name || ""} profile={session.data?.user?.image || ""} />
        <Ballance publicKey={publicKey} />
        <Tabs />
          
      </div>


    </div>
  )
}

export default ProfileCard

const Greeting = ({ name, profile }: { name: string, profile: string }) => {
  return <div className='flex justify-center items-center gap-5'>
    <span>
      <Image className='rounded-full' width={70} height={70} src={profile} alt='profile' />
    </span>
    <span className='text-white text-3xl font-bold'>Welcome back, {name}!</span>
  </div>
}

