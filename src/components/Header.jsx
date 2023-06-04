/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {
 useRef, useState,
} from 'react';
import usePageTop from 'hooks/usePageTop';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const  menu = [
  {
    name : 'Home',
    url : '/',
  },
  {
    name : 'About',
    url : '/about',
  },
  {
    name : 'Menu1',
    url : '/',
  },
  {
    name : 'Menu2',
    url : '/',
  },
  {
    name : 'Contact Us',
    url : '/contact-us',
  },
];

function Header() {
  const router = useRouter();
  const [showToggledNav, setShowToggledNav] = useState(false);

  const outSideClickRef = useRef();
  
  const toogleHeader = () => {
    setShowToggledNav(!showToggledNav);
  };
  
  const reachedTop = usePageTop();
  const pathName = usePathname();

  useOnClickOutside(outSideClickRef, () => setShowToggledNav(false));

  const validPaths = ['/', '/about'];

  const isValidPath = validPaths.includes(pathName);

  const activeindex = () => {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].url === pathName) {
        return i;
      }
    }
  };
  const [active, setActive] = useState(activeindex);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 w-full px-2 ${isValidPath
        && reachedTop && !showToggledNav ? 'bg-gradient-to-b from-black via-[#00000080] to-[#00000000]' : 'bg-white shadow-xl'
      } lg:px-8 xl:px-24 md:px-4`}
      ref={outSideClickRef}
    >
      <nav className="py-2 md:py-4 ">
        <div className="mx-auto lg:container container-fluid md:flex md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/" className="w-32 h-12 ml-2 lg:w-36 md:h-12 lg:-ml-2">
              <Image
                src={isValidPath && reachedTop && !showToggledNav ? '/images/logo.png' : '/images/logo_black.png'}
                alt="logo"
                fill
                className='!relative my-auto'
              />
            </Link>
            <button
                kind=""
                onClick={toogleHeader}
                type="button"
                className={`w-10 border-0 btn-circle btn-outline md:hidden bg-transparent focus:bg-transparent hover:bg-transparent ${
                  isValidPath && reachedTop && !showToggledNav ? '!text-white' : '!text-black'
                }`}
              >
                <FaBars className={`${!showToggledNav ? 'text-base' : 'hidden'}`}  />
                <div className={`${showToggledNav ? 'text-base' : 'hidden'} `}>X</div>
              </button>
          </div>
          <div
            // eslint-disable-next-line no-nested-ternary
            className={`md:ml-auto  md:mt-0 md:flex md:items-center ${
              showToggledNav ? 'flex flex-col' : 'hidden'
            }`}
          >
            {menu.map((data, index) => (
            <Link
              key={index}
              href={data.url}
              className={` ${active === index && '!text-primary'} ${isValidPath
                  && reachedTop ? 'md:text-white text-black' : 'text-black'
                } hover:!text-primary text-lg px-4 py-2 bg-transparent rounded-md relative z-10`}
              onClick={ () => (setActive(index) & setShowToggledNav(false)) }
            >
              {data.name}
            </Link>
          ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;