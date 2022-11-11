import React from 'react'
import {ChooseUsData} from '../data'

const ChooseUs = () => {
  return (
    <section className='w-full max-w-[1920px] py-5 md:py-20 mx-auto px-5 md:px-20 xl:px-28'>
      <div className='w-full flex flex-col items-center lg:items-start'>
        <div>
          <h2 className='text-[36px] text-center md:text-start px-0 md:px-16 md:text-[64px] font-primary'>Why To Choose Us?</h2>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between max-w-[1650px] mx-auto lg:mt-16'>
            {ChooseUsData.map((item,index)=>{
              const {image, title, context} = item
              return (
                <div key={index} className='flex flex-row max-w-[390px] lg:mr-5 items-center py-16 shadow-md'>
                  <div>
                    <img src={image} alt="/" />
                  </div>
                  <div className='pl-4'>
                    <h3 className='font-primary text-[22px]'>{title}</h3>
                    <p className='text-gray-600'>{context}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs