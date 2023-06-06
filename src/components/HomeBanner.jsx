/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import H2 from './typography/H2'
import H1 from './typography/H1'

export default function HomeBanner() {
  return (
    <section>
        <div className='h-screen overflow-hidden'>
          <Image
          fill
          src = '/images/sliderImage.png'
          className=" object-cover absolute top-0 bottom-0 z-[1]"
          />
          <div className="absolute bg-[#00000080] z-[2] top-0 bottom-0 left-0 right-0"/>
          <div className="h-8 absolute bottom-0 left-0 right-0 bg-white z-20">
              <div className="h-2 relative top-0 left-0 right-0 bg-white" /> 
              <div className="h-3 relative top-0 left-0 right-0 bg-primary" /> 
          </div>
          <div className="text-white text-center absolute z-[5] bottom-20  left-1/2 -translate-x-1/2 w-4/5">
              <H2 className="tsad font-bold">Lorem ipsum dolor sit amet.</H2>
              <H2 className="tshad">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ipsa.</H2>
              <div className="pt-6 pb-20 flex w-full relative z-50 lg:w-4/5 mx-auto">
                  <input type="text" name="Search" id="search" className='rounded-l h-8 md:h-12 border-2 border-gray-200 shadow w-full min-w-[200px]'/>
                  <button className='bg-primary px-6 py-1 md:py-3 rounded-r'>Search</button>
              </div>
          </div>
        </div>
    </section>
  )
}
