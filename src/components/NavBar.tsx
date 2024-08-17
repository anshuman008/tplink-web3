'use client'
import { signIn, signOut, useSession } from "next-auth/react"

const NavBar = () => {


  const session = useSession();

  
  return (
        <div className="flex w-full justify-between px-10 items-center h-12 p-9 bg-[#1c1c1c]">
            <div className="text-2xl font-bold text-white">Dcex</div>

            <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-1  me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={() => {session?.data?.user ? signOut():signIn('google')}}>{session?.data?.user ?'Sign Out' :'Sign In'}</button>
            
        </div>
  )
}

export default NavBar