import { projects } from "@/constants";

const RecentProjects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="flex-col-center gap-15 size-full md:px-20">
        <h2 className="text-center">Some of my recent projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
          {projects.map((item) => (
            <div
              className="flex flex-col min-w-full h-[460px] md:h-[624px] rounded-2xl baseBorder bg-prod-dark group"
              key={item.id}
            >
              <div
                className={`bg-prod-light ${item.className} flex-center w-full h-2/3 p-2 rounded-t-2xl overflow-hidden`}
              >
                {item.id === 1 ? (
                  // /* anim-mob
                  <div className="relative h-full flex-center ">
                    <img
                      src="/images/mob-left.webp"
                      alt="mobile-left"
                      className="mobile-frame z-11 translate-y-6   group-hover:[transform:rotate(14.5deg)] 
                       group-hover:-translate-x-5
                       group-hover:translate-y-0"
                    />
                    <img
                      src="/images/mob-right.webp"
                      alt="mobile-right"
                      className="mobile-frame -translate-y-8 group-hover:[transform:rotate(-14.5deg)]  group-hover:translate-x-5
                      group-hover:translate-y-0"
                    />
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 relative -bottom-7 md:-bottom-11 w-5/6 xl:max-w-[70%] h-auto object-cover transition duration-700 ease-in-out group-hover:[transform:rotate(-2.5deg)] group-hover:scale-110"
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
                    className="text-sm font-medium text-center text-[--color-blue-50] px-4 py-2.5 rounded-[44px] bg-[#1f2243] "
                    target="_blank"
                  >
                    Check Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
