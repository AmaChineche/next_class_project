"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div className='flex py-0 px-20 my-0 bg-blue-400 items-center justify-between shadow-lg border-black ' >
        <div>
        <Image alt='Logo' src="/logo.png" width={150} height={50}/>
        </div>
       
<div>
<form action='' className='relative w-max mx-auto'>

<input  placeholder="Search..." type='search' name='search' id='search' className='relative peer z-10 bg-transparent w-12 h-12 rounded-full  focus:w-full focus:border-line-300 border cursor-pointer border-blue-700 outline-none pl-12 focus:cursor-text focus:pl-16 focus:pr-4  '/>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute h-8 w-12 inset-y-0 my-auto px-3.5 stroke-black-500 border-r border-transparent peer-focus:border-line-300 peer-focus:stroke-line-500' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</form>
</div>


      <div>
      
      <div className='flex py-3 px-3  md:flex ml-8 space-x-8 '>
       <Link className=' transition hover:text-pink-400 cursor-pointer' href="/contact">Contact</Link>
       <br/>
       <Link className='hover:text-pink-400 transition rounded hover:border-pink-400 cursor-pointer ' href="/about">About</Link>
       <br/>
       <Link className=" hover:text-pink-700 transition hover:border-pink-400 cursor-pointer " href="/dashboard">Dashboard</Link>
       <Link className='hover:border-b-2 transition hover:' href="/service">service</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
