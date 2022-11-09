import React from 'react'
//import data
import {sliderData} from '../data'

const RecommendedDestination = () => {
  return (
    <section className='w-full max-w-[1920px] mx-auto px-10 md:px-20 lg:py-20 flex flex-col justify-center items-center lg:items-start pb-20 lg:mt-0'>
      <div className='text-[48px] md:text-[64px] font-bold py-10 px-5'>
        <h2 className='font-primary'>Popular Packages</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {sliderData.map((item, index)=>{
          const {id, image, dateIcon, days, locationIcon, location, peopleIcon, people, place, price, rating, starIcon} = item
          return( 
            <div key={index} className='max-w-[390px] bg-white rounded-3xl md:mx-5 my-4 shadow-xl hover:scale-105 duration-300'>
              {/* image */}
              <div>
                <img src={image} alt="/" />
              </div>
             {/* info */}
             <div className='flex flex-row h-[50px] justify-start items-center px-1 md:px-5 text-gray-700'>
                <div className='flex items-center'>
                  <div className='bg-gray-200 p-1'>
                    {dateIcon}
                  </div>
                  {days}
                </div>
                <div className='flex items-center px-7'>
                <div className='bg-gray-200 p-1'>
                    {peopleIcon}
                  </div>
                  {people}
                </div>
                <div className='flex items-center '>
                  <div className='bg-gray-200 p-1'>
                      {locationIcon}
                    </div>
                  {location}
                </div>
             </div>
             {/* name of the place */}
             <div className='px-5 border-b border-gray-200 pb-3'>
              <h3 className='text-[16px] md:text-[26px] font-bold leading-[28px] md:leading-[35px]'>{place}</h3>
             </div>
             {/* price and rating */}
             <div className=' py-5 px-5 flex flex-row text-gray-700 justify-between items-center text-[16px] md:text-[22px]'>
                <div>{price}</div>
                <div className='flex flex-row items-center'>
                  <p className='text-gray-700'>{rating}</p>
                  <p className='text-yellow-500'>{starIcon}</p>
                </div>
             </div>
              
            </div>
          )
        })}
      </div>
      <button className='bg-orange-500 hover:bg-orange-600 rounded-md p-5 text-white w-[150px] mx-auto mt-20 items-center hover:scale-105 duration-300'>View More</button>
    </section>
  )
}

export default RecommendedDestination