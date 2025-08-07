import { cn } from "@/utils";
import { Marquee } from "@/helpers/marquee.helpers";
import {reviews} from "./LogoMarquee.constants"

const firstRow = reviews.slice(0, reviews.length);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure className={cn("pr-7 flex-center")}>
      <img width="140px" height="32px" alt={name} src={img} />
    </figure>
  );
};

export default function LogoMarquee() {
  return (
    <div className="relative md:mt-35 mt-25 w-dvw cursor-pointer overflow-hidden gap-0">
      {/* Marquee default duration:40s || to speed up change [--duration:20s] */}
      <Marquee pauseOnHover className="gap-0 p-0">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#000319]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#000319]"></div>
    </div>
  );
}
