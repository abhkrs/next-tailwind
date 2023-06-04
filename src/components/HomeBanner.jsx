/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import H2 from './typography/H2'
import H1 from './typography/H1'

export default function HomeBanner() {
  return (
    <section>
        <div className='h-screen'>
          <Image
          fill
          src = '/images/sliderImage.png'
          className=" object-cover absolute top-0 bottom-0 z-[1]"
          />
          <div className="absolute bg-[#00000080] z-[2] top-0 bottom-0 left-0 right-0"/>
          <Image
          fill
          src = '/images/bottomlayer.png'
          className=" object-cover w-full absolute !bottom-0 z-10"
          />
          <div className="h-2 absolute bottom-0 left-0 right-0 bg-white z-20"></div>
          <div className="text-white text-center absolute z-[5] bottom-20  left-1/2 -translate-x-1/2 w-4/5">
              <H2 className="tsad font-bold">Lorem ipsum dolor sit amet.</H2>
              <H2 className="tshad">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ipsa.</H2>
              <div className="py-6 flex w-full relative z-50 lg:w-4/5 mx-auto">
                  <input type="text" name="Search" id="search" className='rounded-l h-8 md:h-12 border-2 border-gray-200 shadow w-full min-w-[250px]'/>
                  <button className='bg-primary px-6 py-1 md:py-3 rounded-r'>Search</button>
              </div>
          </div>
        </div>
    </section>
  )
}
