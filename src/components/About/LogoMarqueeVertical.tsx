import { cn } from "@/utils";
import { Marquee } from "@/helpers/marquee.helpers";
import {reviews} from "./LogoMarqueeVertical.constants"

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-25 lg:w-35 h-13.5 lg:h-17.5 p-4 overflow-hidden rounded-lg  bg-[#10132E] flex-center gap-2"
      )}
    >
      <img width="20px" height="20px" alt={name} src={img} />
      <figcaption className="text-xs lg:text-base text-nowrap text-[#7D7ABC]">
        {name}
      </figcaption>
    </figure>
  );
};

export function LogoMarqueeVertical() {
  return (
    <div className="relative size-full flex-center overflow-hidden">
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
