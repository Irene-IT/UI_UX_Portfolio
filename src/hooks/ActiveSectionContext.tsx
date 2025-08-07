// import React, { createContext, useContext, useState, useEffect } from "react";
// import { navLinks } from "../constants";

// interface ActiveSectionContextType {
//   activeSection: string;
// }

// const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

// export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const ids = navLinks.map(({ link }) => link.slice(1));
//     const observer = new IntersectionObserver((entries) => {
//       const visible = entries
//         .filter(e => e.intersectionRatio >= 0.1)
//         .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
//       if (visible.length > 0) setActiveSection(visible[0].target.id);
//     }, { threshold: 0.1 });

//     ids.forEach(id => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <ActiveSectionContext.Provider value={{ activeSection }}>
//       {children}
//     </ActiveSectionContext.Provider>
//   );
// };

// export const useActiveSection = () => {
//   const ctx = useContext(ActiveSectionContext);
//   if (!ctx) throw new Error("useActiveSection must be used within ActiveSectionProvider");
//   return ctx;
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import { navLinks } from "../constants";

interface ActiveSectionContextType {
  activeSection: string;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = navLinks
      .filter(({ link }) => link.startsWith("#"))
      .map(({ link }) => link.slice(1));

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });

    const elements: HTMLElement[] = [];

    function handleIntersect(entries: IntersectionObserverEntry[]) {
      const visible = entries
        .filter(entry => entry.intersectionRatio >= 0.1)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    }

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error("useActiveSection must be used within ActiveSectionProvider");
  }
  return ctx;
};


