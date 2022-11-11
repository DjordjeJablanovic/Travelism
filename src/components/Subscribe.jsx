import React from 'react'
import subOne from '../assets/subOne.png'
import subTwo from '../assets/subTwo.png'
import subThree from '../assets/subThree.png'
import {BsTelegram} from 'react-icons/bs'


const Subscribe = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto lg:px-20 py-10 lg:py-0'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
            {/* left side */}
            <div className='lg:py-40 mb-10 flex items-center lg:mt-5 flex-row px-5 lg:px-0'>
                <div>
                    <img src={subOne} alt="subThree" />
                </div>
                <div className='ml-5'>
                    <img src={subTwo} alt="subOne" className='mb-5' />
                    <img src={subThree} alt="subTwo" />
                </div>
            </div>
            {/* right side */}
            
            <div className=' flex flex-col items-center lg:items-start justify-center px-1 md:px-10'>
                <h2 className='text-[24px] text-center lg:pt-5 md:text-[74px] font-bold mb-2 font-primary'>Subscribe to get offers</h2>
                <p className='py-2 mb-5 text-[16px] md:text-[18px]  px-3 lg:w-[800px] leading-[30px] md:leading-[36px] text-gray-700'>Auctor fermentum, sit iaculis aliquam commodo non. Metus odio sed purus justo. Eget egestas non ornare tincidunt ut. Id eget erat libero dui tellus viverra. Massa risus et at turpis adipiscing faucibus. At faucibus lorem sodales blandit nunc, faucibus consectetur tempor diam dui. Nam neque, non leo mauris pellentesque odio. </p>
                <div className='w-full md:w-[670px] md:h-[90px] px-2 flex items-center justify-between  rounded-xl shadow-lg'>
                  <input type="text" placeholder='Please enter your email address' className='w-[90%] md:w-[500px] h-10 md:h-[70px] focus:outline-none'/>
                  <BsTelegram className='text-[30px] md:text-[70px] cursor-pointer'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe