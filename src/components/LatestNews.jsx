/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import H2 from "./typography/H2";
import P from "./typography/P";
import Card from "./Card";

export default function LatestNews() {
    const cardEntries = [
        {
            date: '9 July 2022',
            name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aperiam neque nam laudantium sapiente asperiores eos. Quaerat corporis fugiat perferendis earum, adipisci aliquam molestias a, cum vitae cumque porro laudantium.',
        },
        {
            date: '9 July 2022',
            name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aperiam neque nam laudantium sapiente asperiores eos. Quaerat corporis fugiat perferendis earum, adipisci aliquam molestias a, cum vitae cumque porro laudantium.',
        },
        {
            date: '9 July 2022',
            name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aperiam neque nam laudantium sapiente asperiores eos. Quaerat corporis fugiat perferendis earum, adipisci aliquam molestias a, cum vitae cumque porro laudantium.',
        },
    ];
  return (
    <section>
      <div className="relative h-full py-12">
            <Image
            src="/images/leftimg.png"
            className="!object-cover top-0 left-0 bottom-0 right-0 z-[1] absolute"
            fill
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#8F00FF95] z-[2]" ></div>
            <div className="2xl:container p-4 relative z-10 text-white lg:!w-2/3 mx-auto">
                <H2 className="text-center">
                    Latest <span className="font-bold">News</span>
                </H2>
                <P className="text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    quidem veritatis iusto nesciunt necessitatibus blanditiis tempore
                    expedita at quaerat error.
                </P>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-6 px-6 pt-4">
            {cardEntries.map((data) => (
              <Card
              key = {data.name}
              img = {data.img}
              date = {data.date}
              name = {data.name}
              desc = {data.desc}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
