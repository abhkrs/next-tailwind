/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-black text-white bottom-0 p-4 pt-8 md:pt-4'>
        <div className="flex flex-col md:flex-row justify-between">
            <div className='flex basis-1/3 my-auto text-sm !text-center md:text-start'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae ad itaque similique excepturi distinctio!
            </div>
            <div className='flex justify-center'>
                <Link href="/">
                <Image
                width='100'
                height = '50'
                className='!relative object-contain mx-auto mt-8 my-4 md:mt-0'
                src="/images/logo.png"
                /></Link>
            </div>
            <div className="flex text-black gap-4 text-xl justify-center md:justify-end mx-4 mt-6 mb-3">
            <Link
              href="https://www.facebook.com/"
              className="hover:bg-primary bg-white rounded-full p-1"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://twitter.com/"
              className="hover:bg-primary bg-white rounded-full p-1"
            >
              <FaTwitter />
            </Link>

            <Link
              href="https://www.instagram.com/"
              className="hover:bg-primary bg-white rounded-full p-1"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://www.pinterest.com/"
              className="hover:bg-primary bg-white rounded-full p-1"
            >
              <FaPinterestP />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              className="hover:bg-primary bg-white rounded-full p-1"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
    </footer>
  )
}
