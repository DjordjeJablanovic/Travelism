import React from 'react'
import chillout from '../assets/chillout.png'
import surfing from '../assets/surfing.png'
import extreme from '../assets/extreme.png'
import camping from '../assets/camping.png'



const Activities = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto lg:py-16 bg-active  md:py-10  py-10'>
       <div className='w-full px-5 lg:px-36 text-white font-secondary flex justify-between items-center '>
        <h2 className='text-[40px] md:text-[64px] font-bold mb-5 font-primary'>Browse By Activities</h2>
        <button className='border border-white w-[150px] md:w-[100px] h-[50px] rounded-lg hover:scale-105 duration-300'>View All</button>
       </div>
       <div className='flex flex-col lg:flex-row justify-center lg:px-20 items-center w-full'>
        {/* left */}
        <div className='relative  md:w-auto  hover:scale-95 duration-300 rounded-2xl'>
          {/* overlay */}
          <img src={chillout} alt="chillout"/>
          <div className='absolute bottom-[20px] lg:bottom-[40px] left-[20px] lg:left-[40px] z-20'>
            <h3 className='text-[30px] lg:text-[42px] text-white font-bold'>Chillout</h3>
            <p className='text-[16px] lg:text-[20px] text-gray-600'>18 Locations</p>
          </div>
        </div>
        {/* right */}
        <div>
          {/* surfing */}
          <div className='relative  flex justify-center mx-auto lg:px-7 my-3 lg:my-0 hover:scale-95  duration-300'>
            <img src={surfing} alt="surf" className='w-full' />
            <div className='absolute bottom-[20px] lg:bottom-[40px] left-[20px] lg:left-[40px] z-20'>
              <h3 className='text-[30px] lg:text-[42px] text-white font-bold'>Surfing</h3>
              <p className='text-[16px] lg:text-[20px] text-gray-600'>12 Locations</p>
            </div>
          </div>
          {/* extreme and camping */}
          <div className='flex flex-row  justify-between w-full lg:px-7 xl:w-full mx-auto lg:mt-3'>
            {/* extreme */}
            <div className='relative hover:scale-95 duration-300 '>
              <img src={extreme} alt="extreme" />
              <div className='absolute bottom-[10px] lg:bottom-[40px] left-[20px] z-20'>
                <h3 className='text-[20px] lg:text-[42px] text-white font-bold'>Extreme</h3>
                <p className='text-[14px] lg:text-[20px] text-gray-600'>24 Locations</p>
              </div>
            </div>
            {/* camping */}
            <div className='relative lg:ml-3 hover:scale-95 duration-300'>
              <img src={camping} alt="camping" />
              <div className='absolute bottom-[10px] lg:bottom-[40px] left-[20px] z-20'>
                <h3 className='text-[20px] lg:text-[42px] text-white font-bold'>Camping</h3>
                <p className='text-[14px] lg:text-[20px] text-gray-600'>16 Locations</p>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Activities