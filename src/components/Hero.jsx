import React from 'react'
import Navbar from './Navbar'
import {AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto h-[100vh]  min-h-[300px] heroBg relative'>
        {/* overlay */}
        <div className='w-full h-full bg-black/10 absolute'>
        </div>
        <Navbar/>
        <div className='relative z-20 mx-auto flex flex-col items-center justify-center py-20 lg:py-40 lg:pl-80 md:py-20'>
            <h1 className='text-white font-primary text-[50px] md:text-[120px] lg:text-[136px] leading-[70px] md:leading-[130px]'
                >Discover Your <br /> Destination </h1>
            <p className='font-semibold lg:w-[700px] md:w-[600px] text-gray-100 leading-[200%] text-center md:text-start py-5'
                >Tellus turpis nunc tempor ut lacinia id integer quam. Hendrerit scelerisque tristique sagittis nisl, mi amet pharetra, mauris, sem. Vestibulum orci nibh libero eget enim placerat.</p>
            <form className='bg-white/90 w-[350px] md:w-[670px] flex flex-col md:flex-row items-start md:items-center relative md:rounded-full py-5 px-10 mt-10 md:mt-0 '>
                <div className='flex flex-col'>
                    <label className='py-1 font-semibold'>Location</label> 
                    <input type="text" placeholder='Where are you going?' className='focus:outline-none' />
                </div>
                <div className='flex flex-col py-3 md:py-0'>
                    <label className='py-1 font-semibold'>Date</label>
                    <input type="date"/>
                </div>
                <div className='flex flex-col'>
                    <label className='py-1 font-semibold'>How many people</label>
                    <select name="cars" id="cars">
                        <option value="1" defaultValue={1}>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="6+">6+</option>
                    </select>
                </div>
                <div className='rounded-full bg-orange-600 p-7 text-white absolute right-0 mr-5 hidden md:flex'>
                    <AiOutlineSearch/>
                </div>
            </form>
        </div>
        
    </section>
  )
}

export default Hero