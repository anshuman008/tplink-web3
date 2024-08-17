'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const session = useSession();
  return (
    <div className="h-screen bg-black flex justify-center items-center">

      <div className="flex flex-col justify-center items-center gap-y-10">

        <div className="flex flex-col justify-center items-center gap-y-5">
          <span className="text-6xl font-bold text-white">The Indian Cryptocurrency <span className="text-orange-500">Revolution</span></span>
          <span className="text-3xl font-bold text-white">Create a frictionless wallet from India with just a Google Account.</span>
          <span className="text-3xl font-bold text-white">Convert your INR into Cryptocurrency</span>
        </div>
        {/* <span className="p-3 bg-blue-:400 px-10 rounded-lg ">Dashboard</span> */}


        
        <button onClick={() => {session?.data?.user? router.push('/dashboard'):signIn('google')}}  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {session?.data?.user ? 'dashboard' : 'Sign In'}
        </button>

      </div>


    </div>
  );
}
