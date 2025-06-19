import CarouselWithContent from "../components/Carusel";
// import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full flex flex-col items-center gap-[50px]">
          <h2 className="text-center">
            Kind words from satisfied clients
          </h2>
          <CarouselWithContent />
        </div>
  
    </section>
  );
};
export default Testimonials;


