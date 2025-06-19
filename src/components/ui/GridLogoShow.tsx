/* eslint-disable @next/next/no-img-element */
// import { cn } from "@utils";
import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "I've never seen anything like this before. It's amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  {
      img: "/images/grid/AITools.svg",
      name: "AI Tools",
    },
    {
      img: "/images/grid/adobe.svg",
      name: "Adobe",
    },
    {
      img: "/images/grid/figma.svg",
      name: "Figma",
    },
    {
      img: "/images/grid/webflow.svg",
      name: "Webflow",
    },
    {
      img: "/images/grid/framer.svg",
      name: "Framer",
    },
    {
      img: "/images/grid/blender.svg",
      name: "Blender",
    },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
 
}: {
  img: string;
  name: string;
 
}) => {
  return (
    <figure
      className={cn(
        "relative h-13.5 w-25 lg:h-17.5 lg:w-35  p-4 overflow-hidden rounded-lg  bg-[#10132E] flex items-center justify-center gap-2")}
    >
   
        <img width="20px" height="20px" alt={name} src={img} />
          <figcaption className="text-xs lg:text-base text-nowrap text-[#7D7ABC]">
            {name}
          </figcaption>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center  overflow-hidden">

    
   
      <Marquee pauseOnHover vertical>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical>
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
