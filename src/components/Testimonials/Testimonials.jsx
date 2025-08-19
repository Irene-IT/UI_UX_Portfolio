import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center md:mt-35 mt-25" aria-labelledby="testimonials-title">
        <div className="w-full flex-col-center gap-[50px]">
          <h2 id="testimonials-title">
            Kind words from satisfied clients
          </h2>
          <TestimonialSlider />
        </div>
    </section>
  );
};
export default Testimonials;


