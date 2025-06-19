// import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
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

  return (
    // <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>

   <header className={ "navbar" }>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>{name}
                  {/* <span>{name}</span> */}
                  {/* <span className="underline" /> */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
    </header>
    
  );
};

export default NavBar;


// addd animate active class to the active link
// <span class="relative flex size-3">
//   <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
//   <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
// </span>