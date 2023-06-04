/* eslint-disable jsx-a11y/alt-text */
'use client'

import Image from "next/image";
import P from "./typography/P";
import { useState } from "react";
import H6 from "./typography/H6";
import H3 from "./typography/H3";
import H4 from "./typography/H4";

export default function Card({ img, date, name, desc }) {
    const [hover, setHover] = useState(false);
  return (
    <div
      className="w-80 h-96 shadow-lg !relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={img || "/images/leftimg.png"}
        className={`${
          hover ? "brightness-[0.25]" : "brightness-1"
        } object-cover !relative rounded-md`}
        fill
      />
      <P
        className={`absolute top-6 left-6 bg-primary text-white rounded px-2`}
      >
        {date}
      </P>
      <div className="absolute bottom-4 left-4 rounded px-2">
        <P
        className={`${
          hover ? "flex" : "hidden"
        } text-white mb-2`}
      >
        {desc}
      </P>
      <H4
        className= 'text-white relative z-10'
      >
        {name}
      </H4>
      <div className={`${
          !hover && "bg-gradient-to-t from-black via-[#00000060] to-transparent"
        } absolute -bottom-4 -left-4 right-0 z-[5] h-40 rounded-md`}>

      </div>
      
      </div>
    </div>
  );
}
