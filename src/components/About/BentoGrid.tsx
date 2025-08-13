import { cn } from "@/utils";
import { LogoMarqueeVertical } from "./LogoMarqueeVertical";
import ContactModal from "../Contact/ContactModal";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 baseBorder bg-[#04071D] bg-linear-[90deg,#04071D_0%,#0c0e23_100%]",
        className
      )}
    >
      {/* Add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="size-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center size-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute inset-0 flex-center text-[--color-blue-50] font-normal px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl bg-prod-light bg-prod1"></div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
          )}
        >
          {/* Change the order of the title and desc*/}
          <div className="font-sans font-light md:text-base text-xs text-[--color-blue-50] z-10">
            {description}
          </div>
          <div className="font-sans text-xl lg:text-[1.625rem] max-w-[516px] font-normal z-10">
            {title}
          </div>

          {/* For the 3d globe */}
          {id === 2}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="w-auto h-full flex justify-right lg:gap-3 absolute right-3">
              <LogoMarqueeVertical />
            </div>
          )}

          {/* Contact Modal Form */}
          {id === 6 && (
            <div className="mt-5 relative">
              <ContactModal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
