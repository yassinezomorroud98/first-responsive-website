import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full py-6 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl ms:text-3xl text-xl font-bold py-2'> Want tips & tricks to optimize your flow?</h1>
                    <p>sign up to our newsletter and stay up to date.</p>

                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email' />
                        <button className='text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 bg-[#1baaf7]'>Notify Me</button>
                    </div>
                    <p>we care bout the protection of your data. Read our <span className='text-[#1baaf7]'>Privacy Policy.</span></p>
                </div>
            </div>

        </div>
    )
}
