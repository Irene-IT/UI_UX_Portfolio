import { useState, useRef } from "react";
import { approachCards } from "../../constants";
import useIsOnscreen from "../../hooks/ useIsOnscreen";

const Cards = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      {approachCards.map((item) => (
        <CardItem 
          key={item.id} 
          item={item} 
          activeId={activeId}
          toggleCard={toggleCard}
          setActiveId={setActiveId}
        />
      ))}
    </>
  );
};

const CardItem = ({ item, activeId, toggleCard, setActiveId }) => {
  const cardRef = useRef(null);
  const isOnscreen = useIsOnscreen(cardRef);

  const isMobile = window.innerWidth <= 768;
  
  // On mobile, content is only displayed if the card is in view.
  const shouldShowContent = isMobile ? isOnscreen : activeId === item.id;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setActiveId(item.id)}
      onMouseLeave={() => setActiveId(null)}
      onClick={() => toggleCard(item.id)}
      className="baseBorder group/canvas-card flex-center dark:border-white/[0.2] max-w-sm w-full h-[450px] md:h-[500px] mx-auto relative rounded-3xl baseBgBtn"
    >
      <div className="relative z-20 p-5">
        {/* Content with smooth transitions */}
        <div 
          className={`transition-all duration-500 ease-in-out flex-col-center gap-8 ${
            shouldShowContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <AceternityIcon item={item.id} />
          <h3 className="approach-text">{item.title}</h3>
          <p className="approach-text md:text-left">{item.des}</p>
        </div>

        {/* Icon with smooth transitions */}
        <div 
          className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out transform min-w-40 mx-auto flex-center group-hover/canvas-card:-translate-y-4 ${
            shouldShowContent 
              ? 'opacity-0 translate-y-4 pointer-events-none' 
              : 'opacity-100 translate-y-0'
          }`}
        >
          <AceternityIcon item={item.id} />
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ item }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-conic-[from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%]" />
        <span className="size-full px-5 py-2 font-semibold text-xl md:text-2xl cursor-pointer flex-center inline-flex rounded-full backdrop-blur-3xl bg-midnightBlue">
          Phase {item}
        </span>
      </button>
    </div>
  );
};

export default Cards;
