"use client"
import React, {useState} from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useRouter } from 'next/navigation'

const PaymentPage = ({username}) => {

    //const {data:session} = useSession()
const [paymentform, setPaymentform] = useState({
  name: "",
  message: "",
  amount: ""
})
    const [currentUser, setcurrentUser] = useState({ })
    const [payments, setPayments] = useState([ ])

    useEffect(() => {
      getData()
    }, [])
    
    const handleChange = (e) => {
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async (params) => {
      let u = await fetchuser(username)
      setcurrentUser(u)
      let dbpayments = await fetchpayments(username)
      setPayments(dbpayments)
      console.log(u, dbpayments)
    }

    const pay = async(amount) => {
        
        //get the order id
        let a = await initiate(amount, username, paymentform)
        
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Use public env variable for client-side
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Buy Me Sting", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
    <>
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<div className='cover w-full relative'>
      <img className="object-cover w-full h-48 md:h-[350]" src={currentUser.coverpic} alt="" />
      <div className="absolute -bottom-15 right-[37%] md:right-[46%] border-white overflow-hidden border-3 rounded-full size-32">
        <img className="rounded-full object-cover size-32"width={128} height={128} src={currentUser.profilepic} alt="" />
      </div>
    </div>
    <div className="">
    <div className="info flex justify-center items-center my-18 flex-col gap-2">
      <div className="font-bold text-lg">
      @{username}
      </div>
      <div className="text-slate-300">
        Start Supporting {username} Now!
      </div>
      <div className="text-slate-300">
        {username} Has Received {payments.length} Payments By Supporters
      </div>

      <div className="payment flex flex-col md:flex-row  mx-15 md:mx-auto px-10 md:px-auto gap-3  mt-10 ">
       
        <div className='relative cursor-pointer h-100 md:h-100 w-140 md:w-140  overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
              <div className='cursor-pointer flex flex-col items-center'>
                <div className='cursor-pointer my-5 mt-2 text-4xl text-bold'> 
                  <div className="flex gap-2 text-3xl md:text-4xl font-bold cursor-pointer"><span><img src="/Thunder2.gif" width={44} alt="" /></span>  Your Supporters <span><img src="/Thunder2.gif" width={44} alt="" /></span></div></div>
              <div>
              <ul>
                {payments.length == 0 && <li className="justify center text-xl">No Payments To Show</li>}
                {payments.map((p, i) => {
                  return <li key={i} className="my-2 text-lg">
            <div>      
                  <h1 className="text-sm md:text-lg font-bold flex flex-row cursor-pointer">
                     <lord-icon
              src="https://cdn.lordicon.com/rihvnffu.json"
              trigger="hover"
              colors="primary:#e8e230"
              >
          </lord-icon>
                    {p.name} Supported INR-{p.amount} with a Message &quot;{p.message}&quot;
                  </h1>
                </div></li>
                })}

        </ul>
              </div>
              </div>
            </div>

          </div>
        
         <div className='relative cursor-pointer h-150 md:h-100 w-140 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl'>
              <div className='cursor-pointer flex flex-col items-center'>
                <div className='cursor-pointer my-5 mt-2 text-4xl text-bold'> 
                  <div className="flex gap-2 text-3xl md:text-4xl font-bold cursor-pointer"><span><img src="/Thunder2.gif" width={44} alt="" /></span>  Make a New Payment <span><img src="/Thunder2.gif" width={44} alt="" /></span></div></div>
                  <div className="flex flex-col mt-4 gap-2">

                <div>
                     <input onChange={handleChange} value={paymentform.name || ""} name = 'name'
      className='border-1 block h-12 w-100 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
      placeholder='Enter Your Name'
    /></div>
     <input onChange={handleChange} value={paymentform.message} name = 'message'
      className='border-1 block h-12 w-100 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
      placeholder='Enter Your Message'
    />
                    <input onChange={handleChange} value={paymentform.amount} name = "amount"
      className='border-1 block h-12 w-100 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
      placeholder='Enter Your Amount'
    />
      <button onClick={() => pay(Number.parseInt(paymentform.amount)* 100)} className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        PAY NOW!
      </span>
    </button>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-4">
                    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl' onClick={()=> pay(500)}>
        Pay INR-500
      </span>
    </button>
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl' onClick={()=> pay(1000)}>
        Pay INR-1000
      </span>
    </button>
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl' onClick={()=> pay(2000)}>
        Pay INR-2000
      </span>
    </button>
                  </div>
               </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default PaymentPage
