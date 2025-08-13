import React from "react";
import Cards from "./ApproachCard";

const Approach = () => {
  return (
    <section id="approach" className="flex-center section-padding">
      <div className="w-full md:px-20">
        <h2 className="text-center">My approach</h2>
        <div className="size-full mt-10 md:mt-15 flex-col xl:flex-row flex-center gap-10 z-50">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Approach;
