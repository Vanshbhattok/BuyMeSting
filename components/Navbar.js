"use client"
import React, {useState} from 'react'
import Script from "next/script";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

const Navbar = () => {
    const { data: session } = useSession();
    const [showdropdown, setShowdropdown] = useState(true);

    
   /* if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }*/
  return (
    <>
    <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
    <nav className='bg-slate-950 text-white flex text-center justify-around px-4 md:h-15 flex-col md:flex-row items-center'>
      <div >
        <Link className="logo" href={"/"}>
        <h1 className="text-2xl font-bold flex flex-row cursor-pointer mt-1">Buy Me Sting
          <lord-icon
    src="https://cdn.lordicon.com/rihvnffu.json"
    trigger="hover"
    colors="primary:#e8e230"
    >
</lord-icon>
        </h1></Link>
      </div>
      
     <ul className="flex flex-row justify-between gap-4 mt-1 md:mt-4">
      
      {session && 
      <>
<button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(()=>{setShowdropdown(false)}, 300); }}
id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50' >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'/>
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Greetings! {session.user.email}<lord-icon
    src="https://cdn.lordicon.com/gqfozvrp.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon></span>
</button>

<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} mt-18 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-83 dark:bg-black`}>
    <ul className="py-2 text-bold text-bg text-amber-white dark:text-white" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-amber-300 dark:hover:text-black">Your Dashboard</Link>
      </li>
      <li>
        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-amber-300 dark:hover:text-black">Your Account</Link>
      </li>
      
      <li>
        <Link onClick={()=> signOut()} href="/login" className="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-amber-300 dark:hover:text-black">Sign out</Link>
      </li>
    </ul>
</div>
</>
}
      
      {/*{session &&
      <li className='mt-4'>
         <Link href={"/dashboard"}>
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50' >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'/>
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Your Dashboard
      </span>
    </button></Link></li>}*/}
  <div className="flex flex-row md:flex-row gap-1 md:gap-4 items-center mx-1 md:mx-0">
    {session && 
      <li className='mt-2 md:mt-2'>
        <button className='w-20 relative flex flex-col gap-4 md:block inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50' onClick={() => {signOut()}}>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'/>
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        SignOut
      </span>
    </button>
    </li>}

    
      {!session &&
    <li className='mt-2 md:mt-2'>
        <Link href={"/login"}>
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 md:mt-0.5' >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'/>
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        SignUp
      </span>
    </button></Link></li>}
     
     <div className='justify-center items-center md:block'>
     <li><a href='https://github.com/Vanshbhattok'><button className='w-10 h-10 text-white my-5 rounded-full flex gap-1 cursor-pointer justify-center items-center mt-5'>
        <img className="invert w-10  p-1" src="/github.svg" alt="" />
        
      </button></a></li>
      </div>
      </div>
     </ul>
    </nav>
    </>
  )
}

export default Navbar
