import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import imgOne from '../assets/reviewImg.png'
import userImg from '../assets/userImg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "../index.css"
//import data 
import {reviewsData} from '../data'

const TopReviews = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto py-10 lg:py-20'>
        <div className='bg-active text-white px-0 flex flex-col xl:flex-row justify-center items-center'>
            {/* left side */}
            <Swiper navigation={true} slidesPerView={1} loop={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiper w-full xl:w-[50%] mb-10 xl:mb-0">
                {reviewsData.map((item, index)=>{
                    const {ratingIcon, rating, title, comment, userImg, userName, userLocation} = item
                    return (
                        <SwiperSlide key={index}>
                        <div  className='flex flex-col items-start lg:w-full px-14 md:px-20 justify-center mx-auto'>
                                <h2 className='text-[48px] lg:text-[64px] leading-[70px] font-bold py-16 lg:py-20 font-primary'>Top Traveler Reviews</h2>
                            <div className='flex flex-row items-center'>
                                {rating}
                                <div className='text-yellow-500 ml-2'>{ratingIcon}</div>
                            </div>
                            <h3 className='text-[24px] lg:text-[26px] font-semibold leading-[35px] py-3'>{title}</h3>
                            <p className='text-gray-400 md:text-[20px] leading-[36px] py-5 lg:py-0'>{comment}</p>
                            {/* user image */}
                            <div className='py-5 mb-10 lg:mb-0 flex flex-row items-center justify-between w-full md:w-[500px]'>
                                <div className='flex flex-row items-center'>
                                    <img src={userImg} alt="user" />
                                    <div className='ml-5'>
                                        <h4>{userName}</h4>
                                        <p className='text-gray-500'>{userLocation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })} 
            </Swiper>
            {/* right side */}
            <div>
                <img src={imgOne} alt="/"/>
            </div>
        </div>
    </section>
  )
}

export default TopReviews