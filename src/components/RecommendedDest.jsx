import React, {useState} from 'react'
import {recommendedData} from '../data'

const RecommendedDest = () => {

  const [cat, setCat] = useState(recommendedData)

  const filterType=(category)=>{
    setCat(
      recommendedData.filter((item)=>{
            return item.category === category
        })
    )
}

  return (
    <section className='w-full max-w-[1920px] mx-auto px-10 md:px-20 lg:py-20 flex flex-col justify-center items-center lg:items-start pb-20 lg:mt-0'>
      <div className='text-[48px] md:text-[64px] font-bold px-5 mb-2'>
        <h2 className='font-primary'>Recommended Destinations</h2>
      </div>
      {/* sort */}
      <div>
        <div className='flex lg:px-5 lg:text-[18px] mb-6'>
          <button onClick={() => setCat(recommendedData)} className='px-5 py-3 rounded-full bg-black text-white ' >All</button>
          <button onClick={() => filterType('adventure')} className='px-5 py-3 rounded-full bg-black text-white ml-1' >Adventure</button>
          <button onClick={() => filterType('beach')} className='px-5 py-3 rounded-full bg-black text-white ml-1' >Beach</button>
          <button onClick={() => filterType('cultural')} className='px-5 py-3 rounded-full bg-black text-white ml-1' >Cultural</button>
          <button onClick={() => filterType('popular')} className='px-5 py-3 rounded-full bg-black text-white ml-1' >Popular</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {cat.map((item, index)=>{
          const {image, locationIcon, location, place, rating, starIcon} = item
          return( 
            <div key={index} className='max-w-[390px] bg-white rounded-3xl md:mx-5 my-4 shadow-xl hover:scale-105 duration-300'>
              {/* image */}
              <div>
                <img src={image} alt="/" />
              </div>
             {/* name of the place */}
             <div className='px-5 pt-5'>
                <h3 className='text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[35px]'>{place}</h3>
             </div>
             
             
             <div className='flex justify-between px-5 py-5'>
                 <div className='flex items-center '>
                    <p>{locationIcon}</p> 
                    <p className='ml-1'>{location}</p>
                </div>
                <div className='flex flex-row items-center'>
                  <p className='text-gray-700'>{rating}</p>
                  <p className='text-yellow-500 ml-2'>{starIcon}</p>
                </div>
                
             </div>
             
             
              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RecommendedDest