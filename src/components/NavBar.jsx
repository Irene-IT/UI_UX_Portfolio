import { useState } from "react";
import { navLinks } from "../constants";

// import useIsOnscreen from "../hooks/ useIsOnscreen";

const NavBar = () => {
  //   // track if the user has scrolled down the page
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   // create an event listener for when the user scrolls
  //   const handleScroll = () => {
  //     // check if the user has scrolled down at least 10px
  //     // if so, set the state to true
  //     const isScrolled = window.scrollY > 10;
  //     setScrolled(isScrolled);
  //   };

  //   // add the event listener to the window
  //   window.addEventListener("scroll", handleScroll);

  //   // cleanup the event listener when the component is unmounted
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const [activeLink, setActiveLink] = useState();

  return (
    <header className="navbar baseBorder baseBgBtn">
      <nav className="desktop">
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name} className="group">
              <a
                href={link}
                className={activeLink === link ? "active" : ""}
                onClick={() => setActiveLink(link)}
              >
                {name}
                {activeLink === link && (
                  <span className="absolute flex size-3 top-[34px] md:top-[38px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#AAB2F9] opacity-75"></span>
                    <span className="absolute inline-flex size-3 rounded-full bg-[#AAB2F9]"></span>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
