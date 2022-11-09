import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import {AiOutlineCloseCircle, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick=() =>{
        setNav(!nav)
    }

  return (
    <section className='w-full py-3 text-white relative z-30'>
        <div className='w-full justify-between lg:px-20 items-center flex px-5 md:px-0'>
            <img src={logo} alt="logo" />
            <ul className='flex-row justify-between hidden md:flex'>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="home">Home</a></li>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="Dest">Destinations</a></li>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="Act">Activities</a></li>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="blog">Blog</a></li>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="About">About Us</a></li>
                <li className='px-1 lg:px-3 font-bold hover:scale-105 duration-300 hover:text-gray-600'><a href="Contact">Contact Us</a></li>
            </ul>
            <div className='justify-between hidden md:flex'>
                <button>Log In</button>
                <button className='rounded-full px-3 lg:px-5 py-1 lg:py-3 ml-3 bg-orange-700'>Sign Up</button>
            </div>
            {/* mobile */}
            
            <div className='block md:hidden'>
                {nav ? <AiOutlineCloseCircle size={30} onClick={handleClick} /> : <AiOutlineMenu size={30} onClick={handleClick}/>}
            </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-gray-400 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <img src={logo} alt="logoMobile" className='py-5 px-4' />

                    <ul className='uppercase p-3'>
                        <li className='p-4 border-b b-gray-500'><a href="home">Home</a></li>
                        <li className='p-4 border-b b-gray-500'><a href="Dest">Destinations</a></li>
                        <li className='p-4 border-b b-gray-500'><a href="Act">Activities</a></li>
                        <li className='p-4 border-b b-gray-500'><a href="blog">Blog</a></li>
                        <li className='p-4 border-b b-gray-500'><a href="About">About Us</a></li>
                        <li className='p-4 border-b b-gray-500'><a href="About">Contant</a></li>
                        <li className='p-4'><a href="About">Login</a></li>
                    </ul>
                </div>

        </div>

        
    </section>
  )
}

export default Navbar