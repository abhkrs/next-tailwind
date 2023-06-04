/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import H2 from './typography/H2'
import Image from 'next/image'
import P from './typography/P'
import ReadMore from './typography/ReadMore'

export default function Sattlement({className}) {
  return (
    <section>
        <div className={`2xl:container mx-auto my-8 px-2 ${className}`} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <div>
                    <Image
                    src = "/images/leftimg.png"
                    className="!relative !object-cover rounded-md"
                    fill
                    />
                </div>
                <div className='flex flex-col justify-center align-center p-2'>
                    <H2 className="text-center md:text-left">Find A <span className='font-bold md:block'>Sattlement Agent</span></H2>
                    <P className="my-6 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt magni suscipit iste, quod ab. Natus consequuntur ipsam, eos repellendus illo ut quo est culpa porro eius reiciendis officiis facere magnam tenetur autem aperiam eligendi dicta, obcaecati dolorum? Accusamus beatae voluptatibus et ipsam asperiores obcaecati?</P>
                    <ReadMore
                    className="relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
