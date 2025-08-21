import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
   <div className="text-white flex justify-center flex-col items-center h-[40vh] px-5 md:px-0 text-xs md:text-base gap-5 overflow-x-hidden">
    
    <div className="flex gap-2 text-3xl justify-center items-center md:text-6xl mt-10 font-bold cursor-pointer"><span><img src="/Thunder2.gif" width={50} alt="" /></span>  Buy Me <span className="text-yellow-300">Sting</span> <span><img src="/Thunder2.gif" width={50} alt="" /></span></div>
    <p className="font-bold text-2xl md:text-3xl text-center">Support Your Fovourite Developers</p>
    <p className="font-bold text-2xl md:text-3xl text-center">In Open Source Contributions And Project Building.</p>
    <div className="gap-4 flex justify-center">
       <Link href={"/login"}>
       <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Get Started
      </span>
    </button></Link>

    <Link href={"https://github.com/Vanshbhattok/BuyMeSting"}>
       <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Read More
      </span>
    </button></Link>
    </div>
   </div>

   <div className="text-white">
    <h1 className="text-2xl font-bold text-center my-2 md:mt-10 px-5 md:px-0">Planning to Support Developers - Buy them a Sting!</h1>
    <div className="hero-image-wrapper md:mt-0 mx-5 md:mx-0 mb-5">
      <div className="mt-10">
        {/* Matching the lower part */}
        <div className="relative mx-auto w-full max-w-[880px] md:max-w-[980px] aspect-[890/460] md:aspect-[890/460] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="relative h-full w-full rounded-xl bg-gray-950 backdrop-blur-3xl">
            <Image
              src="/banner.png"
              alt="BuyMeSting's Banner"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap-5 justify-center items-center flex-wrap my-4 mt-4">
      <div className="item">
      <div className="flex flex-col items-center">
  <div className='relative h-58 w-58 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
      1️⃣ Buy Me Sting is a platform to Acknowledge the Developers and Freelancers effort towards Open Source and Project Building, each contribution counts.
    </div>
  </div>
  <p className="mt-4 text-white flex flex-row text-bold text-lg">Acknowledge Developers
    <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#30e849"
    >
</lord-icon>
  </p>
</div>
    </div>
      <div className="item">
      <div className="flex flex-col items-center">
  <div className='relative h-58 w-58 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
      2️⃣ Lets be honest! These are the developers from whom you would have learned Technical or life skills, so take a step forward to bring 
      a smile on their face.
    </div>
  </div>
  <p className="mt-4 text-white flex flex-row text-bold text-lg">Gratitude Feeling
    <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#30e849"
    >
</lord-icon>
  </p>
</div>
    </div>
      <div className="item">
      <div className="flex flex-col items-center">
  <div className='relative h-58 w-58 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
      3️⃣ Platforms like Us, are looking forward to building a strong learning community for good, be a part of this journey of Growth, 
      Learning, Applying and Contributing.
    </div>
  </div>
  <p className="mt-4 text-white flex flex-row text-bold text-lg">Building a Community
    <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#30e849"
    >
</lord-icon>
  </p>
</div>
    </div>
      <div className="item">
      <div className="flex flex-col items-center">
  <div className='relative h-58 w-58 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
      4️⃣ When you become a part of #BuyMeSting community, We introduce you to Developers of different domains and regions, helping you to connect with them directly.
    </div>
  </div>
  <p className="mt-4 text-white flex flex-row text-bold text-lg">Explore Opportunities
    <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#30e849"
    >
</lord-icon>
  </p>
</div>
    </div>
      <div className="item">
      <div className="flex flex-col items-center">
  <div className='relative h-58 w-58 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
      5️⃣ Get the latest and subscriber-only resources and material at the earliest before they become public to fuel your learning, know more about the plans by Signing Up.
    </div>
  </div>
  <p className="mt-4 text-white flex flex-row text-bold text-lg">Become a Subscriber
    <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#30e849"
    >
</lord-icon>
  </p>
</div>
    </div>
      </div>
    </div>
   
   </>
  );
}
