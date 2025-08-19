import { expCards } from "@/constants";
import GlowCard from "./GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section id="experience" className="flex-center section-padding" aria-labelledby="experience-title">
      <div className="size-full md:px-20">
        <h2 id="experience-title">Work experience</h2>
        <div className="relative mt-12.5 xl:mt-15 w-full z-50 xl:space-y-24 space-y-15">
          {expCards.map((card) => (
            <div key={card.id} className="exp-card-wrapper">
              <div className="xl:w-[58%]">
                <GlowCard card={card}>
                  <div>
                    <img src={card.imgPath} alt="exp-img" />
                  </div>
                </GlowCard>
              </div>
              <div className="xl:w-4/6">
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line" />
                  </div>
                  <div className="relative expText flex gap-5 md:gap-10 xl:gap-20 z-20">
                    <div className="timeline-logo baseBorder baseBgBtn z-20">
                      <img
                        className="size-12.5"
                        src={card.logoPath}
                        alt="logo"
                      />
                    </div>

                    <div className="w-[80%] xl:w-[85%] mb-7.5 xl:mb-0">
                      <h3>{card.title}</h3>
                      <p className="mt-2 md:mt-3.5 mb-6 text-gold-50 flex items-center gap-2">
                        <Icon icon="akar-icons:calendar" />
                        {card.date}
                      </p>
                      <p className="text-[#5a9bea] ">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-3 md:mt-2.5 flex flex-col gap-5 text-blue-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
