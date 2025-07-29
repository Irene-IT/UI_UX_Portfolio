import { BackgroundGradientAnimation } from "../components/background-gradient-animation";
import BasicModal from "./ModalContact";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden h-dvh md:h-screen w-dvw flex-col justify-end items-center text-center"
    >
      <div
      //         bg-radial-[at_86%_0%] from-white from-26% to-white to-100%"

        className="absolute top-0 left-0 w-dvw md:w-screen h-full rotate-180
        bg-radial from-white from-26% to-white to-100%"
      >

        <BackgroundGradientAnimation >
        {/* <img
          src="/images/bgColor.webp"
          alt="background"
          className="z-5 size-full object-cover "
        /> */}
       

        <img
          // src="/images/bgGrid.webp"
          src="/images/headerGridPattern.webp"
          alt="GridPattern"
          className="z-50 absolute top-0 left-0 rotate-180 size-full object-cover"
        />
        </BackgroundGradientAnimation>
      </div>

      <div className="hero-layout">
        <header className="flex-col-center w-full">
          <div className="hero-text">
            <div className=" w-full flex-center">
              <h1> Transforming</h1>
              <img src="/images/idea.png" alt="decor" className="max-w-[446px] max-h-[158px] z-50" />
              {/* <img src="/images/idea.png" alt="decor" className="w-auto h-8 sm:h-10" /> */}
              <h1 className="z-40 -left-2">into</h1>
            </div>

            <div className=" w-full flex-center">
              <h1>
                Seamless&nbsp;
                <span className="colorUser">User&nbsp;Experiences</span>
              </h1>
            </div>
          </div>
        </header>
      </div>

      {/* <Button
        text="Discuss Project"
        className="contact-btn md:w-47.5 md:h-14.5 w-41.5 h-11 z-10 bottom-[100px]"
        id="counter"
      /> */}

{/* 
      <a href="#contact" className="btn flex-center mb-[100px]">
        Discuss Project
      </a> */}
      <div className="mb-[100px] z-50"> 
       <BasicModal  />
      </div>
    </section>
  );
};

export default Hero;
