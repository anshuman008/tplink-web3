import { getServerSession } from 'next-auth'
import ProfileCard from '../components/ProfileCard'
import db from '@/app/db'
import { authConfig } from '../lib/auth'
import { error } from 'console'

const getBalance = async () => {
  const session = await getServerSession(authConfig);
  
  const userWallet = await db.solWallet.findFirst({
    where:{
      userId: session?.user.uid
    },
    select:{
      publicKey: true
    }
  })

  if(!userWallet){
   return {  error: "No solana wallet found associated to the user"}
  }

  return {error: null, userWallet};
}

const page = async () => {
  // Fetch wallet data on the server side
  const wallet = await getBalance();

   if(wallet.error || !wallet.userWallet){
    return <>No Solana Wallet Found</>
   }

   console.log(wallet,'this is user wallet!!')
  return (
    <div>
      <ProfileCard  publicKey={wallet.userWallet?.publicKey} />
    </div>
  );
}

export default page;
