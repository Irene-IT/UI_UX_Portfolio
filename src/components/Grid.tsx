import { gridItems } from "../constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";



const Grid = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="size-full md:px-20">
        <BentoGrid className="w-full">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
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

export default Grid;
