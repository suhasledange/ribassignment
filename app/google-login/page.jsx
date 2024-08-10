import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (   
    <div className="fixed flex items-center justify-between flex-col inset-0 bg-black">
    <div className=' bg-black border-b border-gray-800 w-full text-center p-2'>
      <h1 className=' uppercase text-white font-medium'>Reachinbox</h1>
    </div>

        <div className="h-full flex max-w-lg w-full mx-auto items-center justify-center">
          <div className="bg-bg-form border border-gray-600 p-12 w-full rounded-md -translate-y-4">
              <div className='w-full flex items-center flex-col justify-center text-white gap-5'>

                <h1 className='text-lg'>Create a new account</h1>           

                <button className='flex items-center border px-1 py-2 w-full mb-4 rounded-sm border-gray-400 justify-center gap-3'>
                   <div className='w-4 h-4'>
                   <Image className=' aspect-square' src="/google.png" alt="google-icon" width={500} height={500}/>
                   </div>
                   <p className='text-gray-400 text-md'>
                   Sign Up with Google
                   </p>
                    </button>

                    <button className='bg-gradient rounded-sm py-2 px-6 text-sm'>Create an Account</button>
                    <p className='text-sm text-gray-400'>Already have an account? <Link className='text-white' href="/google-login">Sign In</Link></p>

              </div>
          </div>
        </div>
        <div className='w-full bg-bg-form p-1'>
      <p className='text-xs text-center text-gray-500'>2023 Reachinbox. All rights reserved</p>
      </div>
      </div>

  )
}

export default page
