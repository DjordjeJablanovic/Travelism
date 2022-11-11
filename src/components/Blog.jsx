import React from 'react'
import blogimg from '../assets/blogImgOne.png'
import { blogData } from '../data'

const Blog = () => {
  return (
    <section className='w-full flex flex-col mx-auto items-center lg:items-start max-w-[1920px] py-20  px-5 lg:px-20'>
        <h2 className='text-[48px] lg:text-[64px] mb-4 lg:px-20 font-primary'>From Our Blog</h2>
        <div className='w-full items-center justify-center flex'>
        <div className='flex flex-col lg:flex-row  md:items-center'>
            {/* left side */}
            <div className='flex flex-col'>
                <img src={blogimg} alt="blogImage" />
                
            </div>
            {/* right side */}
            <div className='grid grid-cols-1  lg:ml-4'>
                {blogData.map((item,index)=>{
                    const {image, date, title} = item;
                    return(
                        <div key={index} className='my-1 lg:my-0 shadow-md'>
                            <div className='flex flex-row items-center py-3 hover:scale-95 duration-300'>
                                {/* left side */}
                                <div>
                                    <img src={image} alt="/"/>
                                </div>
                                {/* right side */}
                                <div className='lg:max-w-[526px] px-3 '>
                                    <p className='text-[16px] text-gray-500 leading-[22px]'>{date}</p>
                                    <h3 className='text-[26px] lg:text-[31px] font-primary leading-[40px]'>{title}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        <p className='text-gray-500 text-[16px] leading-[22px] font-semibold px-5 py-1 lg:px-28'>16 Oct, 2022 / Inspiration</p>
    </section>
  )
}

export default Blog