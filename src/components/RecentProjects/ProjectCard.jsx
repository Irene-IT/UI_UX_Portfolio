import { useRef } from "react";
import useIsOnscreen from "@/hooks/ useIsOnscreen";
import useIsMobile from "@/hooks/useIsMobile";

const ProjectCard = ({ item }) => {
  const cardRef = useRef(null);
  const isMobile = useIsMobile(768); // breakpoint
  const isOnscreen = useIsOnscreen(cardRef);

  // We use isOnscreen only if the mobile version
  const shouldAnimate = isMobile && isOnscreen;

  return (
    <div
      ref={cardRef}
      className="flex flex-col min-w-full h-[460px] md:h-[624px] rounded-2xl baseBorder bg-prod-dark group"
    >
      <div
        className={`bg-prod-light ${item.className} flex-center w-full h-2/3 p-2 rounded-t-2xl overflow-hidden`}
      >
        {item.id === 1 ? (
          <div className="relative h-full flex-center">
            <img
              src="/images/mob-left.webp"
              alt="mobile-left"
              className={`mobile-frame z-11 translate-y-6 transition duration-700 ease-in-out
                group-hover:rotate-[14.5deg] group-hover:translate-y-0 group-hover:-translate-x-5
                ${shouldAnimate ? "rotate-[14.5deg] translate-y-0 -translate-x-5" : ""}
              `}
            />
            <img
              src="/images/mob-right.webp"
              alt="mobile-right"
              className={`mobile-frame -translate-y-8 transition duration-700 ease-in-out
                group-hover:rotate-[-14.5deg] group-hover:translate-y-0 group-hover:translate-x-5
                ${shouldAnimate ? "rotate-[-14.5deg] translate-y-0 translate-x-5" : ""}
              `}
            />
          </div>
        ) : (
          <img
            src={item.img}
            alt="cover"
            className={`z-10 relative -bottom-7 md:-bottom-11 w-5/6 xl:max-w-[70%] h-auto object-cover transition duration-700 ease-in-out
              group-hover:rotate-[-2.5deg] group-hover:scale-110
              ${shouldAnimate ? "rotate-[-2.5deg] scale-110" : ""}
            `}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <p className="font-medium lg:text-[32px] text-[18px]">
          {item.title}
        </p>
        <p>{item.des}</p>
        <div className="flex justify-between">
          <div className="flex justify-center items-start">
            {item.iconLists.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="figma, fi, ai, blender"
                className={`relative size-10 ${index !== 0 ? "-ml-2" : ""}`}
              />
            ))}
          </div>
          <a
            href={item.link}
            className="text-sm font-medium text-center text-[--color-blue-50] px-4 py-2.5 rounded-[44px] bg-[#1f2243]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
