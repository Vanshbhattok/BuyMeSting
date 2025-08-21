"use client"
import React, { useEffect } from 'react';
import Script from "next/script";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]); // ✅ 

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />

      <div className="text-white py-15 min-h-screen container text-center mx-auto flex flex-col items-center justify-center gap-10 overflow-y-hidden">
        <div className="justify-center items-center">
        <h1 className='text-3xl md:text-5xl font-bold cursor-pointer justify-center items-center flex flex-row'>
          <span><img src="/Thunder2.gif" width={44} alt="" /></span>
          Join Our Community Today!
          <span><img src="/Thunder2.gif" width={44} alt="" /></span>
        </h1></div>

        <div className="flex flex-col gap-4 min-h-screen items-center  p-10">
          <div className="item">
            <div className="flex flex-col items-center">
              <div
                className='relative cursor-pointer h-80 w-100 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'
                onClick={() => { signIn("github") }}
              >
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
                  <div className='cursor-pointer flex flex-col items-center'>
                    <div><img className="invert w-50 p-1" src="/github.svg" alt="" /></div>
                    <div className='cursor-pointer mt-2 text-3xl'> Login with your GitHub</div>
                    <div className='cursor-pointer mt-2'>Do not have one?<a href="https://github.com/">Click Here!</a></div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white flex flex-row text-bold text-xl">
                Get Ready To Explore Buy Me Sting
                <lord-icon
                  src="https://cdn.lordicon.com/gbkitytd.json"
                  trigger="hover"
                  colors="primary:#eee966"
                >
                </lord-icon>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
