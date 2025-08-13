import { BgGradientAnimation } from "./HeroBgGradientAnimation";
import ContactModal from "../Contact/ContactModal";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden h-dvh md:h-screen w-dvw flex-col justify-end items-center text-center"
    >
      <div
        className="absolute top-0 left-0 w-dvw md:w-screen h-full rotate-180
        bg-radial from-white from-26% to-white to-100%"
      >
        <div className="bg-[url(/images/headerGridPattern.webp)] z-50 absolute top-0 left-0 rotate-180 size-full object-cover"></div>
        <BgGradientAnimation />
      </div>

      <div className="hero-layout">
        <header className="flex-col-center w-full">
          <div className="hero-text">
            <div className="flex-center">
              <img
                src="/images/MB4x.webp"
                alt="Transforming ideas into"
                className="lg:w-[820px] min-w-[200px]"
              />
            </div>

            <div className="w-full flex-center">
              <h1>
                Seamless&nbsp;
                <span className="colorUser">User&nbsp;Experiences</span>
              </h1>
            </div>
          </div>
        </header>
      </div>

      <div className="mb-[100px] z-50">
        <ContactModal />
      </div>
    </section>
  );
};

export default Hero;
