/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import H2 from './typography/H2'
import H1 from './typography/H1'

export default function HomeBanner() {
  return (
    <>
      <section className="h-96">
          <div className='h-96 overflow-hidden mb-16'>
            <Image
            fill
            src = '/images/sliderImage.png'
            className="object-cover absolute top-0 bottom-0 z-[1]"
            />
            <div className="absolute bg-[#00000080] z-[2] top-0 bottom-0 left-0 right-0"/>
            <div className="h-12 absolute bottom-0 left-0 right-0 bg-transparent z-20">
                <div className="h-4 bg-gradient-to-t from-black via-[#00000055] to-transparent" />
                <div className="h-4 bg-primary" /> 
                <div className="h-4 bg-gradient-to-b from-primary to-white" /> 
            </div>
            <div className="text-white text-center absolute z-[5] bottom-12  left-1/2 -translate-x-1/2 w-4/5">
                <H2 className="tsad font-bold">Lorem ipsum dolor sit amet.</H2>
                <H2 className="tshad">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ipsa.</H2>
                <div className="pt-6 pb-12 flex w-full relative z-50 lg:w-4/5 mx-auto">
                    <input type="text" name="Search" id="search" className='rounded-l h-8 md:h-12 border-2 border-gray-200 shadow w-full min-w-[170px]'/>
                    <button className='bg-primary px-6 py-1 md:py-3 rounded-r'>Search</button>
                </div>
            </div>
          </div>
      </section>
      <div className="h-20 mb-20" />
    </>
  )
}
