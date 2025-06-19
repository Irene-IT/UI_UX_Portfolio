import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full flex flex-col items-center gap-[50px]">
          <h2 className="text-center">
            Kind words from satisfied clients
          </h2>
          <TestimonialSlider />
        </div>
    </section>
  );
};
export default Testimonials;


