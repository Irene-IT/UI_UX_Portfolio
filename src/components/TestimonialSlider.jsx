import { useState } from "react";
import { testimonials } from "../constants";

const SWIPE_THRESHOLD = 50; // Minimum space for swipe

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Handle swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > SWIPE_THRESHOLD) {
      handleNext(); // swipe left → next
    } else if (distance < -SWIPE_THRESHOLD) {
      handlePrev(); // swipe right → prev
    }
    // Reset
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    // max-w-4xl
    <div className="relative w-full flex justify-center overflow-hidden">
      <div className="w-4/5 max-w-[812px] h-auto flex-col-center justify-between  gap-4">
        {/* Slides wrapper with touch events */}
        <div
          className="flex gap-4 lg:gap-10 transition-all duration-500 ease-in-out size-full"
          style={{ transform: `translateX(-${currentIndex * 105.5}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="inset-0 shrink-0 size-full ">
              <div className="card-gradient bg-card size-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">
                      {t.name}
                    </p>
                    <p className="text-sm md:text-xl font-normal float-left text-gold-50 flex items-center gap-2">
                      {t.title}
                    </p>
                  </div>
                </div>
                <p className="font-light text-sm md:text-xl text-[--color-blue-50]">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4">
          <button onClick={handlePrev} className="btn-arrow rotate-180">
               <img src="/images/arrow-stepper.svg" alt="arrow left" className="w-2.5 h-auto"/>

          </button>
          <button onClick={handleNext} className="btn-arrow">
             <img src="/images/arrow-stepper.svg" alt="arrow right" className="w-2.5 h-auto"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
