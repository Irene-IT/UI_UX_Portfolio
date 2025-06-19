// import { Carousel} from "@material-tailwind/react";
// // import { testimonials } from "../constants";

// // export default function GalleryWithCarousel() {

// export default function CarouselWithContent() {
//   return (
//     // loop={true} autoplay={false}
//     <Carousel transition={{ duration: 2 }} className="rounded-xl"

//     // bottom navigation - start
//     navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}

//     >

//       <div className="relative w-5/6 lg:w-3/5 inset-0 grid items-center bg-blue">
//         <div className="card">
//           {/* avatar - start */}
//           <div className="flex items-center justify-start gap-4 mb-4">
//             <img
//               src="/images/avatar1.png"
//               alt="Avatar"
//               className="float-left max-w-[50px] w-full rounded-[50%"
//             />
//             <div className="flex justify-center items-start flex-col">
//               <p className="text-xl md:text-2xl font-semibold">Michael Johnson</p>
//               <span className="text-sm md:text-xl font-normal float-left text-gold-50 flex items-center gap-2">
//                 Director of AlphaStream Technologies
//               </span>
//             </div>
//           </div>
//           {/* avatar - end */}

//           <p className="font-light text-sm md:text-xl text-[--color-blue-50]">
//             Collaborating with Dmitry was an absolute pleasure. His
//             professionalism, promptness, and dedication to delivering
//             exceptional results were evident throughout our project. Dmitry's
//             enthusiasm for every facet of development truly stands out. If
//             you're seeking to elevate your website and elevate your brand,
//             Dmitry is the ideal partner.
//           </p>
//         </div>
//       </div>

//       <div className="relative w-5/6 lg:w-3/5 inset-0 grid items-center bg-blue">
//         <div className="card">
//           {/* avatar - start */}
//           <div className="flex items-center justify-start gap-4 mb-4">
//             <img
//               src="/images/avatar1.png"
//               alt="Avatar"
//               className="float-left max-w-[50px] w-full rounded-[50%]"
//             />
//             <div className="flex justify-center items-start flex-col">
//               <p className="text-xl md:text-2xl font-semibold">Michael Johnson</p>
//               <span className="text-sm md:text-xl font-normal float-left text-gold-50 flex items-center gap-2">
//                 Director of AlphaStream Technologies
//               </span>
//             </div>
//           </div>
//           {/* avatar - end */}

//           <p className="font-light text-sm md:text-xl text-[--color-blue-50]">
//             Collaborating with Dmitry was an absolute pleasure. His
//             professionalism, promptness, and dedication to delivering
//             exceptional results were evident throughout our project. Dmitry's
//             enthusiasm for every facet of development truly stands out. If
//             you're seeking to elevate your website and elevate your brand,
//             Dmitry is the ideal partner.
//           </p>
//         </div>
//       </div>

//     </Carousel>
//   );
// }

// ===============================
// import React, { useState } from "react";

// const testimonials = [
//   {
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//     avatar: "/images/avatar1.png",
//     text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`
//   },
//   {
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//     avatar: "/images/avatar1.png",
//     text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`
//   },
//   {
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//     avatar: "/images/avatar1.png",
//     text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`
//   },

// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto py-8 overflow-hidden">
//       {/* Slides */}
//       <div className="flex transition-transform duration-500 ease-in-out"
//            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {testimonials.map((t, index) => (
//           <div key={index} className="w-full flex-shrink-0 px-4">
//             <div className="w-full bg-blue p-6 rounded-xl shadow-xl">
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={t.avatar}
//                   alt={t.name}
//                   className="w-[50px] h-[50px] rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-xl font-semibold">{t.name}</p>
//                   <p className="text-sm text-gold-50">{t.title}</p>
//                 </div>
//               </div>
//               <p className="text-[--color-blue-50] text-base">{t.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-white bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❮
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-2 -translate-y-1/2 text-3xl text-white bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

// ===============================

import React, { useState } from "react";

const testimonials = [
  {
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    avatar: "/images/avatar1.png",
    text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`,
  },
  {
    name: "Patricia Lebsack",
    title: "CEO of WebGuru",
    avatar: "/images/avatar1.png",
    text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`,
  },
  {
    name: "Chelsey Dietrich",
    title: "CRM Integration Specialist of A-Team Global",
    avatar: "/images/avatar1.png",
    text: `What sets Dmitry apart is not just technical skill. It's his ability to understand our business needs and translate them into effective solutions. His work has significantly improved our online presence and user engagement. I highly recommend him for any web development project.`,
  },
];

const SWIPE_THRESHOLD = 50; // Мінімальна відстань для свайпу

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="relative w-full max-w-4xl flex justify-center overflow-hidden">
      <div className="w-4/5 max-w-[812px] h-[400px] flex justify-between flex-col items-center gap-4">
        {/* Slides wrapper with touch events */}
        <div
          className="flex gap-4 lg:gap-10 transition-all duration-500 ease-in-out size-full"
          style={{ transform: `translateX(-${currentIndex * 105.5}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="inset-0 shrink-0 bg-card size-full">
              <div className="card size-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
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
        <div className="flex">
          <button
            onClick={handlePrev}
            className="left-2 btn-arrow"
          >
            {/* ❮ */}
            ↜
          </button>
          <button
            onClick={handleNext}
            className=" right-2 btn-arrow"
          >
            {/* ❯ */}
            ↝
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
