// import { BackgroundGradientAnimation } from "../components/background-gradient-animation";
// import Button from "../components/Button";


const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden h-dvh md:h-screen w-dvw flex-col justify-end items-center text-center"
    >
      <div
        className="absolute top-0 left-0 w-dvw md:w-screen h-full
      "
      >
        {/* <BackgroundGradientAnimation> */}
        <img
          src="/images/bgColor.png"
          alt="background"
          className="z-5 size-full object-cover "
        />
        {/* </BackgroundGradientAnimation> */}
      </div>

      <div className="hero-layout">
        <header className="flex-col-center w-full">
          <div className="hero-text">
            <div className=" w-full flex-center">
              <h1> Transforming</h1>
              <img src="/images/idea.png" alt="decor" class="h-8 sm:h-10" />
              <h1>into</h1>
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

      {/* <button className="btn flex-center mb-[100px]">
        Discuss Project
      </button> */}

      <a href="#contact" className="btn flex-center mb-[100px]">
        Discuss Project
      </a>
    </section>
  );
};

export default Hero;
