import React from 'react'
import { assets } from '../assets/assets/assets.js'
function ForgotPassword() {
  return (
    <div className='flex justify-center px-6 items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 '>
      <div className='bg-slate-900 w-96 p-10 rounded-lg shadow-lg '>
        <h1 className='text-white flex justify-center text-xl '>Reset Password</h1>
        <form action="" className='flex flex-col gap-5 mt-4'>
          <div className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] '>
            <img src={assets.mail_icon} alt="" />
            <input type="email" placeholder='Email' className=' rounded-full bg-transparent' />
          </div>
          <div className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img src={assets.lock_icon} alt="" />
          <input type="password" placeholder='New Password' className='rounded-full bg-transparent' />
          </div>
          <div className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]' >
            <img src={assets.lock_icon} alt="" />
          <input type="password" placeholder='Confirm new Password' className='rounded-full bg-transparent' />
          </div>
          <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full w-full'>Reset Password</button>
        </form>
      </div>

    </div>
  )
}

export default ForgotPassword