import React from "react";
import Cards from "./ApproachCard";

const Approach = () => {
  return (
    <section id="approach" className="flex-center section-padding">
      <div className="w-full md:px-20 px-4">
        <h2 className="text-center">My approach</h2>
        <div className="my-20 flex-col lg:flex-row flex-center size-full gap-2 z-50">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Approach;
