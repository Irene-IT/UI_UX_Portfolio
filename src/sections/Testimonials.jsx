import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center md:mt-35 mt-25">
        <div className="w-full flex-col-center gap-[50px]">
          <h2 className="text-center text-pretty">
            Kind words from satisfied clients
          </h2>
          <TestimonialSlider />
        </div>
    </section>
  );
};
export default Testimonials;


