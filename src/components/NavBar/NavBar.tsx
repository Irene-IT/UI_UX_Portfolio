import { navLinks } from "@/constants";
import { useActiveSection } from "@/hooks/ActiveSectionContext";

const NavBar = () => {
  const { activeSection } = useActiveSection();

  return (
    <header className="navbar baseBorder baseBgBtn">
      <nav className="desktop">
        <ul>
          {navLinks.map(({ link, name }) => {
            const id = link.startsWith("#") ? link.slice(1) : link;
            const isActive = id === activeSection;

            return (
              <li key={name} className="group">
                <a
                  href={link}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "true" : undefined}
                >
                  {name}
                  {isActive && (
                    <span className="absolute flex size-3 top-[34px] md:top-[38px]">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#AAB2F9] opacity-75"></span>
                      <span className="absolute inline-flex size-3 rounded-full bg-[#AAB2F9]"></span>
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
