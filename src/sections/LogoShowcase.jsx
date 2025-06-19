import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => {
  return (
    <div className="relative md:mt-35 mt-25">
      <div className="gradient-edge"></div>  {/* gradient left */}
      <div className="gradient-edge"></div>  {/* gradient right */}

      <div className="marquee h-8">
        <div className="marquee-box md:gap-10 gap-5">
            {/* COPY 2's!!! This is important for continuous animation: when the first part scrolls, the second follows it, and the loop does not break. */}
            {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default LogoShowcase
