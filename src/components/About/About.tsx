import { gridItems } from "../../constants";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="size-full md:px-20">
        <BentoGrid className="w-full">
          {gridItems.map((item) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;











 