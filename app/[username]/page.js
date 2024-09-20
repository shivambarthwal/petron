import Image from 'next/image'
import React from 'react'
import codeImg from "@/public/coding.png"
const Username = ({params}) => {
  return (
   <>
   
   <div className='cover w-full relative'>
   <Image className='w-full h-[350px]' 
   src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1728000000&token-hash=wSuXa5NkmV6E2Cud5d-IPAIyw5tlVp_71iHLQXFQfX0%3D"
   height={400}
   width={500}
   />
   <div>
    <Image
    className='absolute right-[46%] -bottom-14 rounded-full border-2 border-white'
    src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
    height={150}
    width={150}
    />
   </div>
   </div>
   <div className='info flex my-24 flex-col justify-center items-center gap-2'>
    <div className='font-bold text-lg'>
    {params.username}
    </div>
    <div className='text'>
      Creating Animated art for VTP
    </div>
    <div>
      7,814 members  . 82 post  . $12,240/releases
    </div>
    <div className='payment flex gap-3 w-[80%] mt-11' >
      <div className='supporter w-1/2 bg-slate-900 rounded-lg p-10 text-white'>
      <h2 className='font-bold text-lg my-4'>Suppoters</h2>
        <ul className='mx-5 text-lg'>
          <li className='my-2 flex gap-2 items-center'>
            <Image src={codeImg} width={40} height={40} />
            <span> shubham donated <span className='font-bold'>$50</span> with the message  " I support you bro . Lots of Love❤️ </span></li>

            <li className='my-3 flex gap-2 items-center'>
            <Image src={codeImg} width={40} height={40} />
            <span> shubham donated <span className='font-bold'>$20</span> with the message  " I support you from Jaipur . Lots of Love❤️ </span></li>

            <li className='my-3 flex gap-2 items-center'>
            <Image src={codeImg} width={40} height={40} />
            <span> shubham donated <span className='font-bold'>$5</span> with the message  " Well Played bro . Lots of Love❤️ </span></li>

            <li className='my-3 flex gap-2 items-center'>
            <Image src={codeImg} width={40} height={40} />
            <span> shubham donated <span className='font-bold'>$70</span> with the message  " Lots of Love❤️ </span></li>

            <li className='my-3 flex gap-2 items-center'>
            <Image src={codeImg} width={40} height={40} />
            <span> shubham donated <span className='font-bold'>$4</span> with the message  " I support you bro . Lots of Love❤️ </span></li>
            
         
        </ul>
        </div>  
        <div className='w-1/2 bg-slate-900 rounded-lg text-white p-10'>
        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
        <div className='flex gap-2 flex-col'>
          <div>
          <input className='w-full p-3 rounded-lg bg-slate-800' type="text" placeholder='enter the name' />
          </div>
          <input className='w-full p-3 rounded-lg bg-slate-800' type="text" placeholder='enter message' />
          <input className='w-full p-3 rounded-lg bg-slate-800' type="text" placeholder='enter the amout' />
          <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold 
              rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center
               transition duration-300 ease-in-out"
            >
              PAY
            </button>
        </div>
        <div className='flex gap-2 mt-4'>
          <button className='bg-slate-800 rounded-lg p-3'>Pay $10</button>
          <button className='bg-slate-800 rounded-lg p-3'>Pay $20</button>
          <button className='bg-slate-800 rounded-lg p-3'>Pay $50</button>
        </div>
      </div>    
    </div>
   </div>
   </>
  )
}

export default Username