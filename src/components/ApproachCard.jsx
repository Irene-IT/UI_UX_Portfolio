import { useState } from "react";
import { approachCards } from "../constants";

const Cards = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      {approachCards.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => setActiveId(item.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={() => toggleCard(item.id)}
          className="baseBorder group/canvas-card flex-center dark:border-white/[0.2] max-w-sm w-full h-[35rem] mx-auto p-2 relative rounded-3xl baseBgBtn"
        >
          <div className="relative z-20 px-10">
            {activeId === item.id ? (
              <>
                <h3 className="approach-text">{item.title}</h3>
                <p className="approach-text">{item.des}</p>
              </>
            ) : (
              <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 ease-in-out transform min-w-40 mx-auto flex-center group-hover/canvas-card:-translate-y-4  group-hover/canvas-card:opacity-0">
                <AceternityIcon item={item.id} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const AceternityIcon = ({ item }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-conic-[from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%]" />
        <span className="size-full cursor-pointer flex-center inline-flex rounded-full bg-midnightBlue px-5 py-2 backdrop-blur-3xl font-semibold text-xl md:text-2xl">
          Phase {item}
        </span>
      </button>
    </div>
  );
};

export default Cards;
