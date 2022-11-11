import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
// import photos
import photoOne from '../assets/exploreOne.png'
import photoTwo from '../assets/exploreTwo.png'
import photoThree from '../assets/exploreThree.png'


const Explore = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto lg:py-5 px-1 mt-10 md:mt-10 lg:mt-0 md:px-10 '>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
            {/* left side */}
            <div className=' flex flex-col items-center lg:items-start justify-center '>
                <h2 className='text-[50px] text-center md:text-[74px] font-bold mb-2 font-primary'>Just Explore About Us</h2>
                <p className='py-2 text-[16px] md:text-[18px] lg:w-[800px] leading-[30px] md:leading-[36px] text-gray-700'>Metus odio sed purus justo. Eget egestas non ornare tincidunt ut. Id eget erat libero dui tellus viverra. Massa risus et at turpis adipiscing faucibus. At faucibus lorem sodales blandit nunc, faucibus consectetur tempor diam dui. Nam neque, non leo mauris pellentesque odio. </p>
                <p className='py-2 text-[16px] md:text-[18px] lg:w-[800px] leading-[30px] md:leading-[36px] text-gray-700'>Auctor fermentum, sit iaculis aliquam commodo non. Metus imperdiet tristique ultrices ut viverra ipsum id erat libero dui tellus vive  blandit nunc, faucibus consecte malesuada.</p>
                <button className='flex px-3 font-semibold md:px-5 rounded-xl items-center bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300 py-2 md:py-5 md:mt-10 text-white'>Read More <AiOutlineArrowRight className='ml-2'/></button>
            </div>
            {/* right side */}
            <div className=' lg:py-20 mt-10 flex items-center lg:mt-5 flex-row px-5 lg:px-0'>
                <div className='mr-5'>
                    <img src={photoOne} alt="imgOne" className='mb-5' />
                    <img src={photoTwo} alt="imgTwo" />
                </div>
                <div>
                    <img src={photoThree} alt="photoThree" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore