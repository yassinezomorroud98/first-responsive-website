import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function Nav() {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <div className='text-white flex items-center h-24 max-w-[1240px] max-auto px-4 justify-between'>
                <h1 className='w-full text-3xl font-bold text-[#1baaf7]'>ZOMORROUD</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resource</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#1baaf7]'>ZOMORROUD</h1>
                    <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>Resource</li>
                        <li className='p-4 border-b border-gray-600'>About</li>
                        <li className='p-4 '>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
